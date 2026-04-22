import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Check, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "sonner";
import { z } from "zod";

const LEAD_EMAIL = "rehmanabidch@gmail.com";

interface FormState {
  industry: string;
  size: string;
  maturity: string;
  goals: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

const initial: FormState = {
  industry: "",
  size: "",
  maturity: "",
  goals: [],
  budget: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  message: "",
};

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
});

const Assessment = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const steps = [
    { key: "industry", q: t.assessment.q.industry, type: "single" as const },
    { key: "size", q: t.assessment.q.size, type: "single" as const },
    { key: "maturity", q: t.assessment.q.maturity, type: "single" as const },
    { key: "goals", q: t.assessment.q.goals, type: "multi" as const },
    { key: "budget", q: t.assessment.q.budget, type: "single" as const },
    { key: "timeline", q: t.assessment.q.timeline, type: "single" as const },
    { key: "contact", type: "contact" as const },
  ];

  const total = steps.length;
  const current = steps[step];
  const progress = ((step + 1) / total) * 100;

  const isStepValid = () => {
    if (current.type === "contact") {
      const r = schema.safeParse({ name: data.name, email: data.email, company: data.company, message: data.message });
      return r.success;
    }
    if (current.type === "multi") return data.goals.length > 0;
    return Boolean(data[current.key as keyof FormState]);
  };

  const next = () => {
    if (!isStepValid()) return;
    if (step < total - 1) setStep(step + 1);
    else submit();
  };
  const back = () => step > 0 && setStep(step - 1);

  const submit = async () => {
    const parsed = schema.safeParse({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
    });
    if (!parsed.success) {
      toast.error(t.assessment.errorTitle);
      return;
    }
    setSubmitting(true);
    const subject = `BerryBrain AI assessment lead: ${data.company || data.name}`;
    const body = [
      "New AI assessment submission",
      "",
      `Language: ${lang.toUpperCase()}`,
      `Name: ${data.name.trim()}`,
      `Email: ${data.email.trim()}`,
      `Company: ${data.company.trim() || "-"}`,
      `Industry: ${data.industry || "-"}`,
      `Company size: ${data.size || "-"}`,
      `AI maturity: ${data.maturity || "-"}`,
      `Goals: ${data.goals.length ? data.goals.join(", ") : "-"}`,
      `Budget: ${data.budget || "-"}`,
      `Timeline: ${data.timeline || "-"}`,
      "",
      `Message: ${data.message.trim() || "-"}`,
    ].join("\n");

    window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitting(false);
    setDone(true);
  };

  const setSingle = (key: keyof FormState, value: string) => {
    setData({ ...data, [key]: value });
  };
  const toggleGoal = (g: string) => {
    setData({
      ...data,
      goals: data.goals.includes(g) ? data.goals.filter((x) => x !== g) : [...data.goals, g],
    });
  };

  return (
    <section id="assessment" className="py-28 sm:py-36 relative">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            {t.assessment.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
            {t.assessment.title1} <span className="text-gradient">{t.assessment.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.assessment.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-6 sm:p-10 shadow-elegant">
            {done ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{t.assessment.successTitle}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">{t.assessment.successDesc}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>
                    {t.assessment.step} {step + 1} {t.assessment.of} {total}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary mb-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div key={step} className="animate-fade-up">
                  {current.type === "contact" ? (
                    <div className="space-y-4">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold mb-5">
                        {t.assessment.q.contact.name.replace(/your name/i, "")}
                        <span className="text-gradient">→</span>
                      </h3>
                      <Input
                        placeholder={t.assessment.q.contact.name}
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        maxLength={200}
                      />
                      <Input
                        type="email"
                        placeholder={t.assessment.q.contact.email}
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        maxLength={320}
                      />
                      <Input
                        placeholder={t.assessment.q.contact.company}
                        value={data.company}
                        onChange={(e) => setData({ ...data, company: e.target.value })}
                        maxLength={200}
                      />
                      <Textarea
                        placeholder={t.assessment.q.contact.message}
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        maxLength={2000}
                        rows={4}
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6">
                        {current.q!.label}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {current.q!.options.map((opt) => {
                          const selected =
                            current.type === "multi"
                              ? data.goals.includes(opt)
                              : data[current.key as keyof FormState] === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() =>
                                current.type === "multi"
                                  ? toggleGoal(opt)
                                  : setSingle(current.key as keyof FormState, opt)
                              }
                              className={`text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                                selected
                                  ? "border-primary bg-primary/10"
                                  : "border-border/60 bg-card/40 hover:border-primary/40"
                              }`}
                            >
                              <span className="text-sm">{opt}</span>
                              {selected && <Check className="w-4 h-4 text-primary flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
                  <Button variant="ghost" onClick={back} disabled={step === 0}>
                    <ArrowLeft size={16} className="mr-1" />
                    {t.assessment.back}
                  </Button>
                  <Button
                    variant="hero"
                    onClick={next}
                    disabled={!isStepValid() || submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        {t.assessment.submitting}
                      </>
                    ) : step === total - 1 ? (
                      <>
                        {t.assessment.submit}
                        <ArrowRight size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        {t.assessment.next}
                        <ArrowRight size={16} className="ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
