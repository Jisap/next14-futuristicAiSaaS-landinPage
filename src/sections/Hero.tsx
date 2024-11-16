"use client"

import robotImg from '@/assets/images/robot.jpg'
import { Button } from '@/components/Button';
import Image from 'next/image';
import underlineImage from '@/assets/images/underline.svg?url'
import Loader from '@/assets/images/loader-animated.svg'
import { Orbit } from '@/components/Orbit';
import { Planet } from '@/components/Planet';
import { SectionBorder } from '@/components/SectionBorder';
import { SectionContent } from './SectionContent';
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const useMousePosition = () => {
  const [ innerWidth, setInnerWidth ] = useState(1);    // Ancho de la ventana del navegador
  const [ innerHeight, setInnerHeight ] = useState(1);  // Alto de la ventana del navegador
  const clientX = useMotionValue(0);                    // useMotionValue permite crear valores que pueden cambiar con el tiempo y que pueden ser animados.
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]); // Crean transformaciones de clientX e Y en valores normalizados entre 0 y 1.
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);


  useEffect(() => {                                     // Este efecto se ejecuta una sola vez al montar el componente. Su propósito es inicializar innerWidth e innerHeight con el tamaño actual de la ventana del navegador. 
    setInnerHeight(window.innerHeight);                 // Su propósito es inicializar innerWidth e innerHeight con el tamaño actual de la ventana del navegador.
    setInnerWidth(window.innerWidth);

    window.addEventListener('resize', () => {           // Ademas se agrega un listener para el evento resize que actualiza estos valores cada vez que el usuario cambia el tamaño de la ventana.
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {                                     // Efecto para Rastrear el Movimiento del Mouse.
    window.addEventListener('mousemove', (e) => {       // Agregar un listener para el evento mousemove que actualiza los valores de clientX y clientY cada vez que el usuario mueve el mouse.
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  
  },[])

  return { xProgress, yProgress }; // Devuelve un objeto que contiene los valores normalizados xProgress y yProgress, que representan la posición del mouse en relación con el ancho y alto de la ventana, respectivamente.
}

export const Hero = () => {

  const { xProgress, yProgress } = useMousePosition(); // Obtener la posición del mouse en relación con el ancho y alto de la ventana

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ // Obtiene el progreso de scroll del elemento y determina si la sección está entrando o saliendo de la vista para aplicar la animación
    target: sectionRef,
    offset: [
      'end start', // Un cambio en scrollYProgress se activará cuando el final del elemento esté en el inicio de la ventana del navegador -> la sección está comenzando a entrar en la vista.
      'start end'  // El evento se activará cuando el inicio del elemento esté en el final de la ventana del navegador ->  la sección está comenzando a salir de la vista.
    ]
  });

  // Cuando se hace scroll se anima la posición de la bubbles
  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]); // Transforma el valor de scrollYProgress en un valor de movimiento -> animacion de los bubbles
  
  // Cuando el ratón se mueve se inicia efecto parallax de los planetas
  const springX = useSpring(xProgress);                                    // Se le aplica una animación spring a xProgress (pos x del mouse)
  const springY = useSpring(yProgress);                                    // Se le aplica una animación spring a yProgress (pos y del mouse)
  
  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);  // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);  // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);  // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  return (
    <section ref={sectionRef}>
      <div className="container">  
        <SectionBorder className='border-l border-r border-[var(--color-border)]'>
          {/* mask-image para difuminar el comienzo superior e inferior del div */}
          <SectionContent className='relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>  
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
                  <motion.div 
                    style={{
                      x: translateLargeX,
                      y: translateLargeY
                    }}
                  >
                    <Planet 
                      size="lg"
                      color="violet"
                      className='-translate-x-[316px] -translate-y-[76px] rotate-135'
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      x: translateLargeX,
                      y: translateLargeY
                    }}
                  >
                    <Planet
                      size="lg"
                      color="violet"
                      className='-translate-y-[189px] translate-x-[334px] -rotate-135'
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      x: translateLargeX,
                      y: translateLargeY
                    }}
                  >
                    <Planet
                      size="md"
                      color="teal"
                      className='-translate-y-[342px] translate-x-[488px] -rotate-135'
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      x: translateSmallX,
                      y: translateSmallY
                    }}
                  >
                    <Planet
                      size="sm"
                      color="fuchsia"
                      className='-translate-y-[372px] -translate-x-[508px] -rotate-135'
                    />
                  </motion.div>
                </div>

                {/* bubles */}
                <div className='absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block'>
                  <motion.div 
                    className='bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72'
                    style={{
                      y: transformedY
                    }}
                  >
                    <div>
                      Can you generate an incredible frontend dev video tutorial ?
                    </div>
                    <div className='text-right text-gray-400 text-sm font-semibold'>1m ago</div>
                  </motion.div>
                </div>
                <div className='absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block'>
                  <motion.div 
                    className='bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72'
                    style={{
                      y: transformedY
                    }}  
                  >
                    <strong>Brainwave:</strong> I create one based on videos from Frontend Tribe!
                    <div className='text-right text-gray-400 text-sm font-semibold'>Just now</div>
                  </motion.div>
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
                        AI is generating<span className='animate-cursor-blink'>|</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Hero;
