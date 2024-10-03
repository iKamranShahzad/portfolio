const ContactForm = () => {
  return (
    <form className="mt-6 rounded-md bg-neutral-900 p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full rounded-md bg-neutral-800 p-2 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full rounded-md bg-neutral-800 p-2 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          className="w-full rounded-md bg-neutral-800 p-2 text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-950"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
