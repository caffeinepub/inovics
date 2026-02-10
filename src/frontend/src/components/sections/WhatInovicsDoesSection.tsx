import { Shield, Eye, Repeat } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Control',
    description:
      'Establish command over operations with real-time oversight and automated governance systems.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    description:
      'Gain transparent visibility into every department, process, and decision point across your business.',
  },
  {
    icon: Repeat,
    title: 'Continuity',
    description:
      'Build institutional knowledge and succession-ready systems that outlive any single individual.',
  },
];

export function WhatInovicsDoesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              We Build Your Business Operating System.
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Inovics designs and implements AI-powered infrastructure that transforms
              founder-driven businesses into system-driven enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-background border border-border hover:border-accent-yellow/50 transition-all hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-6">
                  <feature.icon className="h-8 w-8 text-accent-yellow" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
