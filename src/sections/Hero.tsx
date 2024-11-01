

import robotImg from '@/assets/images/robot.jpg'
import { Button } from '@/components/Button';
import Image from 'next/image';
import underlineImage from '@/assets/images/underline.svg?url'



export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">  
        <div className='border-l border-r border-[var(--color-border)]'>
          <div className='container py-24'>
            <h1 className='text-4xl font-semibold text-gray-100 text-center leading-tight'>
              Unlock the Future of AI Conversations with{" "}
              <span className='relative'>
                <span>
                  Sphereal
                </span>
                <span 
                  className='absolute w-full left-0 top-full -translate-y-1/2 h-4 linear-gradient'
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}  
                >
                </span>
              </span>
            </h1>

            <p className='text-center text-lg mt-8'>
              Harness the power of AI with Sphereal. Elevate your productivity and streamline your workflow with our cutting-edge platform.
            </p>

            <div className='flex justify-center'>
              <Button 
                variant="secondary"
                className='mt-10'
              >
                Start Chatting
              </Button>
            </div>

            <div className='mt-20 rounded-2xl border-2 overflow-hidden border-gradient'>
              <Image 
                src={robotImg}
                alt="robot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
