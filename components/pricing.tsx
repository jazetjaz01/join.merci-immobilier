import { Box, CircleCheck, Gem, GraduationCap, type LucideIcon, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  reversion: string;
  isRecommended: boolean;
  icon: LucideIcon;
  features: string[];
  priceSuffix?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Étudiant",
    description: "L'offre idéale pour démarrer votre carrière pendant vos études.",
    price: 0,
    reversion: "50%",
    isRecommended: false,
    icon: GraduationCap,
    features: [
      "Abonnement mensuel offert",
      "Accès aux outils métier",
      "Accompagnement dédié",
      "Formation initiale incluse",
    ],
  },
  {
    name: "Liberté",
    description: "Lancez votre activité sans frais fixes mensuels.",
    price: 0,
    reversion: "50%",
    isRecommended: true,
    icon: Box,
    features: [
      "Abonnement à 0€ / mois",
      "Rétribution de 50% des honoraires",
      "Diffusion sur les portails",
      "Support juridique & administratif",
      "Pas d'engagement de durée",
    ],
  },
  {
    name: "Expert",
    description: "Maximisez vos revenus avec une commission haute performance.",
    price: 149,
    priceSuffix: "HT / mois",
    reversion: "70%",
    isRecommended: false,
    icon: Gem,
    features: [
      "Rétribution de 70% des honoraires",
      "Outils marketing premium",
      "Logiciel de pige inclus",
      "Accès prioritaire aux leads",
      "Signature électronique illimitée",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Nos Offres Mandataires
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Choisissez le pack qui correspond à vos ambitions et boostez votre rémunération.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className={cn("border bg-muted/50 flex flex-col h-full", {
        "relative border-2 border-primary bg-background shadow-xl scale-105 z-10":
          plan.isRecommended,
      })}
    >
      {plan.isRecommended && (
        <Badge className="absolute top-0 right-0 rounded-none px-3 py-1">
          Le plus populaire
        </Badge>
      )}
      <div
        className={cn("p-6", {
          "bg-gradient-to-bl from-primary/10": plan.isRecommended,
        })}
      >
        <plan.icon className="mb-5 text-primary size-8" />
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-2xl">{plan.name}</h3>
        </div>
        <p className="my-2 text-muted-foreground min-h-[48px]">{plan.description}</p>
      </div>
      <Separator />
      <div className="px-6 pt-5 pb-10 flex-grow flex flex-col">
        <div className="mb-4">
          <p className="font-bold text-4xl">{plan.price}€</p>
          <p className="font-medium text-muted-foreground text-sm tracking-normal">
            {plan.priceSuffix || "par mois"}
          </p>
        </div>

        <div className="mb-6 p-3 bg-primary/5 rounded-lg border border-primary/20 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Réversion</p>
          <p className="text-2xl font-bold text-primary">{plan.reversion}</p>
        </div>

        <Button className="w-full mb-8" size="lg" variant={plan.isRecommended ? "default" : "outline"}>
          Rejoindre le réseau
        </Button>
        
        <ul className="space-y-3 flex-grow">
          {plan.features.map((feature) => (
            <li className="flex items-start gap-2 text-sm" key={feature}>
              <CircleCheck className="size-4 shrink-0 text-primary mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;