'use client';

import Image from 'next/image';
import SectionHead from './SectionHead';
import { useRef, useState } from 'react';
import emailJS from '@emailjs/browser';
import CustomToast from './CustomToast';

const ContactSection = () => {
  const defaultToastState = {
    visible: false,
    message: null,
    severity: 'success',
  };

  const [isDisabled, setIsDisabled] = useState(false);
  const [toast, setToast] = useState(defaultToastState);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsDisabled(true);

    emailJS
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setToast({
            visible: true,
            message: 'Successfully sent',
            severity: 'success',
          });

          formRef.current.reset();
          setIsDisabled(false);
        },
        (error) => {
          console.error(error);

          setToast({
            visible: true,
            message: 'Something went wrong',
            severity: 'error',
          });

          setIsDisabled(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#0B0F19] text-[#FFFFFF] scroll-mt-[80px] min-h-[60vh] mt-20"
    >
      <SectionHead>Let's Connect</SectionHead>

      <div className="mt-8 px-4">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            items-center
            gap-10
            p-6
            md:p-8
            mx-auto
            max-w-5xl
            bg-[#161B26]
            border
            border-[#38BDF8]/20
            rounded-xl
            shadow-lg
          "
        >
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-[#0B0F19]
                placeholder:text-[#94A3B8]
                text-[#FFFFFF]
                rounded-lg
                py-3
                px-4
                border
                border-[#94A3B8]/20
                text-sm
                outline-none
                transition-all
                duration-300
                focus:border-[#38BDF8]
                focus:ring-1
                focus:ring-[#38BDF8]/30
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-[#0B0F19]
                placeholder:text-[#94A3B8]
                text-[#FFFFFF]
                rounded-lg
                py-3
                px-4
                border
                border-[#94A3B8]/20
                text-sm
                outline-none
                transition-all
                duration-300
                focus:border-[#38BDF8]
                focus:ring-1
                focus:ring-[#38BDF8]/30
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                bg-[#0B0F19]
                placeholder:text-[#94A3B8]
                text-[#FFFFFF]
                rounded-lg
                py-3
                px-4
                border
                border-[#94A3B8]/20
                text-sm
                outline-none
                transition-all
                duration-300
                focus:border-[#38BDF8]
                focus:ring-1
                focus:ring-[#38BDF8]/30
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="
                w-full
                bg-[#0B0F19]
                placeholder:text-[#94A3B8]
                text-[#FFFFFF]
                rounded-lg
                px-4
                py-3
                border
                border-[#94A3B8]/20
                text-sm
                outline-none
                resize-none
                transition-all
                duration-300
                focus:border-[#38BDF8]
                focus:ring-1
                focus:ring-[#38BDF8]/30
              "
            />

            <button
              disabled={isDisabled}
              type="submit"
              className="
                rounded-lg
                text-sm
                font-semibold
                px-4
                py-3
                w-full
                mt-6
                bg-[#38BDF8]
                hover:bg-[#38BDF8]/80
                text-[#0B0F19]
                transition-all
                duration-300
                hover:scale-[1.02]
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              "
            >
              {isDisabled ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Illustration */}
          <div className="flex items-center justify-center w-full">
            <Image
              src="/assets/contact.svg"
              alt="Contact"
              width={400}
              height={400}
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] h-auto"
            />
          </div>
        </div>
      </div>

      {toast.visible && (
        <CustomToast
          severity={toast.severity}
          message={toast.message}
          handleClose={() => setToast(defaultToastState)}
        />
      )}
    </section>
  );
};

export default ContactSection;