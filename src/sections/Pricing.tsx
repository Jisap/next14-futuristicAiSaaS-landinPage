import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button, ButtonProps } from "@/components/Button";
import { twMerge } from "tailwind-merge";

export const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    buttonVariant: "secondary",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    buttonVariant: "secondary",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;
  price: string |number | null;
  buttonText: string;
  buttonVariant?: ButtonProps['variant'];
  features: string[];
  color: string;
  className?: string;
}[];

export const Pricing = () => {
  return (
    <section className="pb-[100opx]">
      <div className="container">
        <SectionBorder >
          <SectionContent>
            <h2 className="text-3xl font-semibold text-center text-gray-200">
              Flexible plans for every need
            </h2>
            <div className="mt-12">
              {pricingTiers.map((tier) => (
                <div key={tier.title} className="border border-[var(--color-border)] rounded-3xl px-6 py-12">
                  <h3 className={
                    twMerge(
                      `font-semibold text-4xl`, 
                      tier.color=== "violet" && "text-violet-400",
                      tier.color=== "amber" && "text-amber-300",
                      tier.color=== "teal" && "text-teal-300"
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">$</span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button
                    className="mt-8"
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                  <ul>
                    {tier.features.map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Pricing;
