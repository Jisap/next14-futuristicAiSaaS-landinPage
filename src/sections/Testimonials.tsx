"use client"

import React from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import test from "node:test";

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

const SELECTED_TESTIMONIAL_INDEX = 0;

export const Testimonials = () => {

  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder>
          <SectionContent>
            <div>
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={testimonial.name}>
                  { SELECTED_TESTIMONIAL_INDEX  === index && (
                    <blockquote key={testimonial.name}>
                      <p>{testimonial.quote}</p>
                    </blockquote>

                  )}                
                </React.Fragment>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default Testimonials;
