'use client';

import { useEffect, useRef } from 'react';
import PcModelCanvas from './canvas/PcModelCanvas';
import SectionHead from './SectionHead';
import TextHighlight from './TextHighlight';
import { motion, useAnimation, useInView } from 'motion/react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start('visible');
    }
  }, [isInView, animationControl]);

  return (
    <section
      id="about"
      className="bg-[#0B0F19] text-[#FFFFFF] scroll-mt-[80px] min-h-[60vh] mt-20"
    >
      <SectionHead>About Me</SectionHead>

      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">

   
{/* About Illustration */}
<div className="flex w-full items-center justify-center lg:w-[40%]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className="w-full max-w-[220px] h-auto sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px]"
    role="img"
    aria-label="Developer illustration"
  >
    {/* Background */}
    <circle
      cx="200"
      cy="200"
      r="170"
      fill="#161B26"
      stroke="#38BDF8"
      strokeWidth="2"
      opacity="0.9"
    />

    {/* Decorative glow */}
    <circle
      cx="200"
      cy="200"
      r="135"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="1"
      opacity="0.2"
    />

    {/* Opening code bracket */}
    <text
      x="55"
      y="185"
      fill="#38BDF8"
      fontSize="60"
      fontWeight="bold"
      fontFamily="monospace"
    >
      {'<'}
    </text>

    {/* Closing code bracket */}
    <text
      x="275"
      y="185"
      fill="#38BDF8"
      fontSize="60"
      fontWeight="bold"
      fontFamily="monospace"
    >
      {'/>'}
    </text>

    {/* Developer head */}
    <circle
      cx="200"
      cy="145"
      r="52"
      fill="#0B0F19"
      stroke="#38BDF8"
      strokeWidth="4"
    />

    {/* Eyes */}
    <circle cx="182" cy="140" r="5" fill="#38BDF8" />
    <circle cx="218" cy="140" r="5" fill="#38BDF8" />

    {/* Smile */}
    <path
      d="M180 165 Q200 180 220 165"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Developer body */}
    <path
      d="M105 315c10-72 48-108 95-108s85 36 95 108"
      fill="#0B0F19"
      stroke="#38BDF8"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Code window */}
    <rect
      x="145"
      y="235"
      width="110"
      height="65"
      rx="8"
      fill="#161B26"
      stroke="#38BDF8"
      strokeWidth="2"
    />

    {/* Code lines */}
    <path
      d="M160 255h35"
      stroke="#38BDF8"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M160 270h75"
      stroke="#94A3B8"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M160 285h55"
      stroke="#94A3B8"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Code dots */}
    <circle cx="160" cy="245" r="3" fill="#38BDF8" />
    <circle cx="170" cy="245" r="3" fill="#38BDF8" opacity="0.7" />
    <circle cx="180" cy="245" r="3" fill="#38BDF8" opacity="0.4" />
  </svg>
</div>



        {/* About Content */}
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: '100%',
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          animate={animationControl}
          transition={{
            duration: 0.5,
            x: {
              type: 'spring',
              visualDuration: 0.4,
              bounce: 0.5,
            },
          }}
          className="lg:w-[60%] text-[#94A3B8] md:text-[1.35rem] text-justify leading-relaxed"
        >
          <p className="mb-5">
            I am a <TextHighlight>Full Stack Developer</TextHighlight> specializing
            in the <TextHighlight>MERN Stack</TextHighlight>. I enjoy building
            reliable and scalable web applications by working across both
            <TextHighlight>frontend</TextHighlight> and{' '}
            <TextHighlight>backend development</TextHighlight>.
          </p>

          <p className="mb-5">
            I am a <TextHighlight>quick learner</TextHighlight> who enjoys exploring
            and learning <TextHighlight>new technologies</TextHighlight>. I believe
            that continuous learning is an important part of becoming a better
            developer and staying adaptable in the constantly evolving technology
            industry.
          </p>

          <p>
            I am passionate about understanding{' '}
            <TextHighlight>real-world problems</TextHighlight> and building
            meaningful solutions through technology. I enjoy solving challenges,
            improving my skills, and contributing to applications that provide
            real value to users and businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

