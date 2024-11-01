

import robotImg from '@/assets/images/robot.jpg'
import Image from 'next/image';



export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">  
        <h1>Unlock the Future of AI Conversations with Sphereal</h1>
        <p>
          Harness the power of AI with Sphereal. Elevate your productivity and streamline your workflow with your cutting-edge platform.
        </p>
        <button>Start Chatting</button>
        <Image 
          src={robotImg}
          alt="robot"
          
        />
      </div>
    </section>
  )
};

export default Hero;
