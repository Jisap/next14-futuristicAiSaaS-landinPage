import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";


export const CallToAction = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-gray-200 font-semibold text-3xl text-center leading-tight">
              Join the AI Revolution wiht <span>Sphereal</span>
            </h2>
            <p className="text-center text-xl mt-8">
              Experience the transformative power of Ai with Sphereal. Boost your productivity and
              streamline your workflow with our innovative AI-chat platform.
            </p>
            <Button>Get Started</Button>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default CallToAction;
