export function EmotionalBlockSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-charcoal to-navy opacity-90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            If You Step Away for 30 Days… What Happens?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            Most family businesses can't answer that question confidently. The founder is the
            system. Every decision, every approval, every crisis flows through one person.
          </p>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            That's not a business. That's a dependency. Inovics builds the infrastructure that lets
            you lead strategically—not operationally.
          </p>
        </div>
      </div>
    </section>
  );
}
