"use client"
import Image from "next/image";
import ContactForm from "../../components/contact/index";
/*
export const metadata = {
  title: "Contact",
};
*/
export default function Contact() {
  return (
    <>
      <Image
        src="/contact-background.png"
        alt="background image"
        fill
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80"
      />

      <article className="relative w-full min-h-screen flex flex-col items-center justify-center  py-8 sm:py-0 space-y-8">
        <section className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
           <h1 className="text-aqua font-semibold text-center text-4xl capitalize">
          Get in Touch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
  Whether you have a question, a project idea, or just want to say hi — I&apos;m always open to connecting. Drop your message below and I&apos;ll get back to you as soon as I can.
</p> 

        </section>
        <ContactForm/>
      </article>
    </>
  );
}
