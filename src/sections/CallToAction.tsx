"use client"

import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { Button } from "@/components/Button";
import underlineImage from '@/assets/images/underline.svg?url';
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { useMousePosition } from "./Hero";
import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";


export const CallToAction = () => {

  const { xProgress, yProgress } = useMousePosition(); // Obtener la posición del mouse en relación con el ancho y alto de la ventana

  // Cuando el ratón se mueve -> parallax de los planetas
  const springX = useSpring(xProgress);                                    // Se le aplica una animación spring a xProgress (pos x del mouse)
  const springY = useSpring(yProgress);                                    // Se le aplica una animación spring a yProgress (pos y del mouse)

  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);  // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);  // Transforma el valor de springY en un valor de movimiento -> animacion de los planetas

  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);  // Transforma el valor de springX en un valor de movimiento -> animacion de los planetas
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']); 


  return (
    <section>
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
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY
                }}
              >
                <Planet size="lg" color="violet" className="translate-y-[200px] -translate-x-[200px] rotate-45"/>
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY
                }}
              >
                <Planet size="lg" color="violet" className="-translate-y-[200px] translate-x-[200px] -rotate-135" />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY
                }}
              >
                <Planet size="md" color="teal" className="-translate-x-[500px] rotate-90" />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY
                }}
              >
                <Planet size="md" color="teal" className="-translate-y-[100px] translate-x-[500px] -rotate-135" />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY
                }}
              >
                <Planet size="sm" color="fuchsia" className="-translate-y-[250px] -translate-x-[400px] rotate-135" />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY
                }}
              >
                <Planet size="sm" color="fuchsia" className="translate-y-[150px] translate-x-[400px] -rotate-45" />
              </motion.div>
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
