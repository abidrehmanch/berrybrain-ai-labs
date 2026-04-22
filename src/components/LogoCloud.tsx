const logos = ["The Web Crew", "Thex Solution", "Apex IT Solutions", "Delta Solutions"];

const LogoCloud = () => (
  <section className="py-16 border-y border-border/50">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
        Trusted by forward-thinking teams worldwide
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {logos.map((l) => (
          <div
            key={l}
            className="text-center font-display font-semibold tracking-[0.15em] text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoCloud;
