

import robotImg from '@/assets/images/robot.jpg'
import { Button } from '@/components/Button';
import Image from 'next/image';
import underlineImage from '@/assets/images/underline.svg?url'
import Loader from '@/assets/images/loader.svg'
import { Orbit } from '@/components/Orbit';
import { Planet } from '@/components/Planet';


export const Hero = () => {
  return (
    <section>
      <div className="container">  
        <div className='border-l border-r border-[var(--color-border)]'>
          {/* mask-image para difuminar el comienzo superior e inferior del div */}
          <div className='container py-24 relative isolate overflow-hidden md:py-36 lg:py-48 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
            {/* Aquí se especifica un gradiente radial que comienza desde un círculo que se extiende hasta la esquina más lejana del elemento (farthest-corner) 
            Esto genera un fondo radial que pasa de fuchsia a indigo y termina en transparencia. */}
            {/* mask-image crea un círculo que se extiende hasta el lado más lejano del contenedor, 
            black:  el área en color negro será opaca (visible), mostrando el contenido del gradiente de fondo.
            transparent: esta zona será transparente, haciendo que todo lo que esté en esa parte del círculo se vuelva invisible.*/}
            <div className='
              absolute inset-0 -z-10 
              bg-[radial-gradient(circle_farthest-corner,_var(--color-fuchsia-900)_50%,_var(--color-indigo-900)_75%,transparent)]
              [mask-image:radial-gradient(circle_farthest-side,black,transparent)]'
            ></div>
            <div className='absolute inset-0 -z-10'>
              <div className='absolute-center'>
                <Orbit className='size-[350px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[600px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[850px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[1100px]' />
              </div>
              <div className='absolute-center'>
                <Orbit className='size-[1350px]' />
              </div>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xlfont-semibold text-gray-100 text-center leading-tight'>
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

            <p className='text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto'>
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

            <div className='relative isolate max-w-5xl mx-auto'>
              {/* planets */}
              <div className='absolute left-1/2 top-0'>
                <Planet 
                  size="lg"
                  color="violet"
                  className='-translate-x-[316px] -translate-y-[76px] rotate-135'
                />
                <Planet
                  size="lg"
                  color="violet"
                  className='-translate-y-[189px] translate-x-[334px] -rotate-135'
                />
                <Planet
                  size="md"
                  color="teal"
                  className='-translate-y-[342px] translate-x-[488px] -rotate-135'
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className='-translate-y-[372px] -translate-x-[508px] -rotate-135'
                />
              </div>

              <div className='absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block'>
                <div className='bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72'>
                  <div>Can you generate an incredible frontend dev video tutorial ?</div>
                  <div className='text-right text-gray-400 text-sm font-semibold'>1m ago</div>
                </div>
              </div>
              <div className='absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block'>
                <div className='bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72'>
                  <strong>Brainwave:</strong> I create one based on videos from Frontend Tribe!
                  <div className='text-right text-gray-400 text-sm font-semibold'>Just now</div>
                </div>
              </div>

              <div className='relative mt-20 rounded-2xl border-2 overflow-hidden border-gradient flex'>
                {/* image robot */}
                <Image 
                  src={robotImg}
                  alt="robot"
                />
                {/* input */}
                <div className='absolute bottom-2 md:bottom-4 lg:botomm-10 left-1/2 -translate-x-1/2 w-full max-w-xs px-[15px] flex justify-center'>
                  <div className='bg-gray-950/80 flex items-center justify-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full'>
                    <Loader className='text-violet-400'/>
                    <div className='font-semibold text-xl text-gray-100'>
                      AI is generating<span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
