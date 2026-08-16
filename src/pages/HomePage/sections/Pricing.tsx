import React from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";

export default function PricingSection(): React.JSX.Element {
  return (
    <div data-webild-section="pricing" id="pricing" className="relative w-full bg-background border-t border-border/10">
      <div className="w-content-width mx-auto px-4 md:px-0">
        <ScrollReveal variant="slide-up">
          <div className="max-w-content-width">
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-card text-foreground border border-border/20 mb-4">
              Pricing
            </span>
            <TextAnimation
              tag="h2"
              variant="fade"
              gradientText={false}
              text="Three ways to work with us"
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            />
            <p className="text-lg text-accent leading-relaxed">
              You pay every supplier directly, at their own rate. We invoice our own service and our coordination — nothing else. There is no hidden commission on what you spend.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: LA SOIRÉE */}
          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="card h-full p-8 rounded-theme flex flex-col justify-between bg-card border border-border/20">
              <div>
                <div className="flex flex-col mb-6">
                  <h3 className="text-xl font-bold text-foreground tracking-wide uppercase">LA SOIRÉE</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">€650</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">One evening.</p>
                </div>

                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed border-t border-border/10 pt-6">
                  <p>
                    A private bartender for the evening, up to twenty guests, five hours. Setup, service, and the house left exactly as we found it.
                  </p>
                  <p>
                    The drinks are yours. We can stock them in advance on your behalf, bought in your name and rebilled at cost, with no margin.
                  </p>
                  <p>
                    Add a private chef from €500, invoiced to you directly by the chef. Coordination 15%.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/10">
                <a
                  href="#contact"
                  className="primary-button w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-medium text-sm transition-colors text-center"
                >
                  Book La Soirée
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: LA SEMAINE */}
          <ScrollReveal variant="slide-up" delay={0.2}>
            <div className="card h-full p-8 rounded-theme flex flex-col justify-between bg-card border border-border/20 relative">
              <div>
                <div className="flex flex-col mb-6">
                  <h3 className="text-xl font-bold text-foreground tracking-wide uppercase">LA SEMAINE</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">€1,400</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">The length of your stay.</p>
                </div>

                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed border-t border-border/10 pt-6">
                  <p>
                    One number, answered at any hour, day or night, for as long as you are here.
                  </p>
                  <p>
                    A reserve constituted on arrival and held for you within the Alpilles — champagne, spirits, ice, glassware, flowers, first aid. Reachable in about thirty minutes at three in the morning, when everything is shut.
                  </p>
                  <p>
                    One evening of private bar service included.
                  </p>
                  <p>
                    Unlimited coordination for the week: chefs, tables, drivers, trades, and the things nobody plans for.
                  </p>
                  <p className="font-medium text-foreground">
                    Chefs and suppliers are paid directly by you, at their own rate.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/10">
                <a
                  href="#contact"
                  className="primary-button w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-medium text-sm transition-colors text-center"
                >
                  Reserve La Semaine
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: LA MAISON */}
          <ScrollReveal variant="slide-up" delay={0.3}>
            <div className="card h-full p-8 rounded-theme flex flex-col justify-between bg-card border border-border/20">
              <div>
                <div className="flex flex-col mb-6">
                  <h3 className="text-xl font-bold text-foreground tracking-wide uppercase">LA MAISON</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">€1,200</span>
                    <span className="text-sm text-accent font-medium">, then €180 per month</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">For owners and agencies.</p>
                </div>

                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed border-t border-border/10 pt-6">
                  <p>
                    A walkthrough film of your property, yours to use on any listing.
                  </p>
                  <p>
                    A card in the kitchen: one number your guests can call at any hour, for the whole season.
                  </p>
                  <p>
                    We know the house before anything goes wrong in it — which is the only reason we can fix it quickly when it does.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/10">
                <a
                  href="#contact"
                  className="primary-button w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-medium text-sm transition-colors text-center"
                >
                  Inquire La Maison
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Closing Note */}
        <ScrollReveal variant="fade" delay={0.4}>
          <div className="p-6 rounded-xl bg-card/60 border border-border/10 text-center max-w-content-width mx-auto">
            <p className="text-sm text-accent font-medium leading-relaxed">
              Prices are for our own service and coordination. Suppliers, chefs, drinks and materials are invoiced separately and directly, at cost.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}