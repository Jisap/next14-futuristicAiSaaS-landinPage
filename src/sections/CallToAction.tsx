import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";
import underlineImage from '@/assets/images/underline.svg?url';


export const CallToAction = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-gray-200 font-semibold text-3xl text-center leading-tight">
              Join the AI Revolution wiht 
              <span className="relative">
                <span> Sphereal</span>
                <span 
                  className="absolute top-full left-0 w-full h-4 linear-gradient -translate-y-1/2"
                  style={{
                    maskImage:`url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat"
                  }}  
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8">
              Experience the transformative power of Ai with Sphereal. Boost your productivity and
              streamline your workflow with our innovative AI-chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default CallToAction;
