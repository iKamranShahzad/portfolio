import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section id="contact" className="m-2 p-4">
      <div className="mx-auto max-w-screen-md">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Contact Me
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
