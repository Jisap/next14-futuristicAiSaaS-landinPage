import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";
import underlineImage from '@/assets/images/underline.svg?url';
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";


export const CallToAction = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute -z-10 inset-0 radial-gradient"></div>
            <div className="absolute -z-10 inset-0">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <Planet size="lg" color="violet" className="translate-y-[200px] -translate-x-[200px] rotate-45"/>
            </div>
            <div className="absolute-center -z-10">
              <Planet size="lg" color="violet" className="-translate-y-[200px] translate-x-[200px] -rotate-135" />
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
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
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
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
