import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";


export const CallToAction = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder>
          <SectionContent>
            <h2>Join the AI Revolution wiht Sphereal</h2>
            <p>
              Experience the transformative power of Ai with Sphereal. Boost your productivity and
              streamline your workflow with our innovative AI-chat platform.
            </p>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default CallToAction;
