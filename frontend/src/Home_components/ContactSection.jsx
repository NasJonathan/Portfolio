import {
  Instagram,
  Linkedin,
  Mail,
  Github,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_9nbngjp",
        "template_d038oeo", // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "x7AFIIjwGSI1pgouV", // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Bericht succesvol verzonden!");
          setFormData({ name: "", email: "", message: "" }); // Clears form
        },
        (error) => {
          console.log(error.text);
          setStatus("Kan het bericht niet verzenden, probeer het opnieuw.");
        },
      );
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-32 relative">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-6 uppercase">
              Get in Touch
            </h2>

            <p className="text-muted-foreground font-semibold mb-10 max-w-md">
              Heeft u een project in gedachten? Neem gerust contact op. Ik kijk
              ernaar uit om van u te horen!
            </p>

            <div className="space-y-6">
              <ContactItem icon={Mail}>
                <a
                  href="mailto:Namajonathan@outlook.com"
                  className="hover:text-primary transition"
                >
                  Namajonathan@outlook.com
                </a>
              </ContactItem>

              <ContactItem icon={Phone}>
                <a
                  href="tel:+31621321473"
                  className="hover:text-primary transition"
                >
                  +31 (62) 132-1473
                </a>
              </ContactItem>

              <ContactItem icon={MapPin}>
                Kipstraat 35, 6462MB Kerkrade, Limburg, Netherlands
              </ContactItem>
            </div>

            <div className="pt-10">
              <h4 className="font-medium text-primary mb-4">Connect with me</h4>
              <div className="flex gap-5 ">
                <a
                  href="https://www.linkedin.com/in/nana-ama-jonathan-a14505386/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="cursor-pointer hover:text-primary" />
                </a>
                <a
                  href="https://github.com/NanaAma035"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="cursor-pointer hover:text-primary" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="cursor-pointer hover:text-primary" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="cursor-pointer hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-6">Stuur een bericht</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                placeholder="Uw Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                placeholder="Uw Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Textarea
                placeholder="Uw bericht"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className={cn(
                  "hero-button w-full flex items-center justify-center gap-2",
                )}
              >
                Send Message <Send size={14} />
              </button>
            </form>

            {status && <p className="mt-4 text-center text-sm">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable components */

const ContactItem = ({ icon: Icon, label, children }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium">{label}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-2 font-semibold text-m text-start">
      {label}
    </label>
    <input
      {...props}
      required
      className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-1 focus:ring-primary"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block mb-2 font-semibold text-start text-m">
      {label}
    </label>
    <textarea
      {...props}
      required
      rows={4}
      className="w-full px-4 py-3 rounded-md border border-input  focus:outline-none focus:ring-1 focus:ring-primary resize-none"
    />
  </div>
);
