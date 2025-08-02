import { Mail, Phone, MapPin, FileText, ArrowRight } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import LeetCodeIcon from './LeetCode'
import { cn } from "@/lib/utils";
import { useState } from 'react'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        event.target.reset();
      } else {
        setSuccess(false);
      }
    } catch (err) {
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-32 bg-background text-foreground"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="text-lg bg-muted/5 p-8 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                +91 9310558007
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="break-all">vaibhavranjan420@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                North Delhi, Delhi, India
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  View Resume
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <h4 className="text-2xl font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-10 text-2xl justify-center mt-10">
                <a
                  href="https://x.com/VaibhavRANJAN_9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={40} />
                </a>
                <a
                  href="https://www.instagram.com/vaibhav_nishant9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-ranjan-9284062a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/VAIBHAVranjan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="https://leetcode.com/NishantKumar5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <LeetCodeIcon className="w-9 h-9" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="border border-gray-400 bg-card border-muted bg-background-foreground p-8 rounded-xl shadow-md text-lg">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-md"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-md"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-1/2 mx-auto flex items-center justify-center gap-2 cursor-pointer",
                  loading && "opacity-60 cursor-not-allowed"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight size={25} />
              </button>

              {success === true && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {success === false && (
                <p className="text-red-600 text-center">Failed to send message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
