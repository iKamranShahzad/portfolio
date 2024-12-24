import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_frm5l9r",
        "template_kh0949j",
        form,
        "yFgNbIUjZHt-SyXp8",
      );

      toast.success("Your message has been sent successfully!", {
        style: {
          background: "#1c1c1e",
          color: "#ffffff",
          border: "1px solid #4caf50",
        },
      });
      form.reset();
    } catch (error) {
      toast.error("There was an error sending your message.", {
        style: {
          background: "#1c1c1e",
          color: "#ffffff",
          border: "1px solid #f44336",
        },
      }); // Error toast
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      className="bg-transparent p-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            name="name"
            className="w-full rounded-md bg-neutral-800 p-2 text-neutral-300 placeholder-purple-400/70"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="What's your email?"
            className="w-full rounded-md bg-neutral-800 p-2 text-neutral-300 placeholder-purple-400/70"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter subject"
          className="w-full rounded-md bg-neutral-800 p-2 text-neutral-300 placeholder-purple-400/70"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={10}
          className="w-full rounded-md bg-neutral-800 p-2 text-neutral-300 placeholder-purple-400/70"
          required
        />
      </div>

      <motion.button
        type="submit"
        className={`w-full rounded-md bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-950 ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        disabled={isLoading}
      >
        {isLoading ? "Sending Message..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
