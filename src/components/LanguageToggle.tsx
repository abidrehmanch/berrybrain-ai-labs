import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "de"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
