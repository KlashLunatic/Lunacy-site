import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_EMAIL } from "@/lib/site";

/** Encode form fields for a Netlify Forms submission. */
function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
    budgetRange: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const projectTypes = [
    "First Light discovery session",
    "Artist Accelerator",
    "Small Business Web & Brand",
    "Brand Activations",
    "À la carte project",
    "Something else",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $15,000",
    "$15,000+",
    "Not sure yet",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return;
    }

    setIsSubmitting(true);
    try {
      // Netlify Forms captures the submission — no backend required.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "contact",
          "bot-field": honeypot,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      trackEvent("project_cta_click", "contact_form_submit", "contact");
      toast.success("Message sent! We'll be in touch soon.");
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        projectType: "",
        budgetRange: "",
      });
      setHoneypot("");

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-coal text-bone">
      {/* Compact hero — the form follows immediately, no dead scroll */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/moon-texture.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-coal/60 via-coal/70 to-coal"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-4 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
          <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
            Begin
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.08] text-bone sm:text-6xl text-balance">
            Initiate
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Tell us where you are and where the work needs to go. We reply
            within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-8">
          {showSuccess && (
            <div className="mb-8 rounded-xl border border-green-500/30 bg-green-950/40 p-6">
              <p className="text-green-200">
                Thank you for reaching out! We&rsquo;ve received your message
                and will be in touch soon.
              </p>
            </div>
          )}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human:{" "}
                <input
                  name="bot-field"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-mist">
                Your Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border-white/15 bg-black/40 px-4 py-3 text-bone placeholder:text-mist/50 focus:border-gold"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-mist">
                Email Address *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border-white/15 bg-black/40 px-4 py-3 text-bone placeholder:text-mist/50 focus:border-gold"
                required
              />
            </div>

            <div>
              <label htmlFor="projectType" className="mb-2 block text-sm text-mist">
                What are you looking for?
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-bone focus:border-gold focus:outline-none"
              >
                <option value="">Select an offering</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budgetRange" className="mb-2 block text-sm text-mist">
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-bone focus:border-gold focus:outline-none"
              >
                <option value="">Select a range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-mist">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, vision, or collaboration idea..."
                rows={6}
                className="w-full resize-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-bone placeholder:text-mist/50 focus:border-gold focus:outline-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full border border-gold/60 bg-transparent py-6 text-lg font-medium text-gold hover:border-gold hover:bg-gold hover:text-coal disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>

            <p className="text-center text-xs text-mist/70">
              * Required fields. We respect your privacy and will only use your
              information to respond to your inquiry.
            </p>
          </form>

          <div className="mt-16 border-t border-white/10 pt-12 text-center">
            <p className="font-cinzel text-xs font-semibold tracking-[0.28em] text-gold">
              Prefer Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block font-display text-2xl italic text-bone transition hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
