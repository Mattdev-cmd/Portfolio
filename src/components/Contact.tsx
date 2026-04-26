import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mdapewkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f8fafc] px-6 py-24 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-5xl font-bold text-slate-950 dark:text-white md:text-6xl">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Have a project or question? Feel free to reach out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-6 py-4 text-slate-950 placeholder-slate-400 transition focus:border-slate-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-600"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-6 py-4 text-slate-950 placeholder-slate-400 transition focus:border-slate-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-600"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-slate-300 bg-white px-6 py-4 text-slate-950 placeholder-slate-400 transition focus:border-slate-500 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            {loading ? 'Sending...' : 'Send Message'}
            {!loading && <Send size={20} />}
          </button>

          {submitted && (
            <div className="text-center text-green-400 text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-12 border-t border-slate-200 pt-12 text-center dark:border-gray-800">
          <p className="mb-4 text-slate-600 dark:text-gray-400">Or reach out directly:</p>
          <a href="mailto:matthewangelopadayao2@gmail.com" className="flex items-center justify-center gap-2 text-lg text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-gray-400">
            <Mail size={18} />
            matthewangelopadayao2@gmail.com
          </a>
          <a href="tel:+639943025722" className="mt-4 flex items-center justify-center gap-2 text-lg text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-gray-400">
            <Phone size={18} />
            +63 994 302 5722
          </a>

        </div>
      </div>
    </section>
  );
}
