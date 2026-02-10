import { FileSpreadsheet, MessageSquare, Eye, Clock, Users } from 'lucide-react';

const problems = [
  {
    icon: FileSpreadsheet,
    text: 'Data scattered across Excel',
  },
  {
    icon: MessageSquare,
    text: 'Founder approval bottlenecks',
  },
  {
    icon: Eye,
    text: 'No real-time visibility',
  },
  {
    icon: Clock,
    text: 'Manual reporting delays',
  },
  {
    icon: Users,
    text: 'Teams dependent on memory',
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            Growth Is Exposing the Cracks.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent-yellow/50 transition-colors"
              >
                <div className="shrink-0">
                  <problem.icon className="h-8 w-8 text-accent-yellow" strokeWidth={1.5} />
                </div>
                <p className="text-lg text-muted-foreground font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              You don't have a growth problem.{' '}
              <span className="text-accent-yellow">You have a systems problem.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
