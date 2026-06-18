"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "rajan@houseofbrands.in";

const CATEGORIES = [
  "Watches",
  "Sunglasses & Eyewear",
  "Leather Accessories",
  "Bags & Luggage",
  "Wallets",
  "Belts",
  "Gift Sets",
  "Corporate Gifting",
];

const QUANTITIES = [
  "Under 500 Units",
  "500–1,000 Units",
  "1,000–5,000 Units",
  "5,000+ Units",
];

type Note = { message: string; kind: "error" | "success" } | null;

export default function ContactForm() {
  const [categories, setCategories] = useState<string[]>([]);
  const [note, setNote] = useState<Note>(null);

  const toggleCategory = (value: string) => {
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (name: string) => (data.get(name) || "").toString().trim();

    const fullName = get("fullName");
    const company = get("company");
    const email = get("email");
    const project = get("project");
    const quantity = get("quantity");

    if (!fullName || !company || !email || !project || categories.length === 0) {
      setNote({
        message: "Please complete the required fields before continuing.",
        kind: "error",
      });
      return;
    }

    const lines = [
      "New Project Enquiry — House of Brands",
      "",
      `Full Name: ${fullName}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Product Category: ${categories.length ? categories.join(", ") : "Not specified"}`,
      `Estimated Quantity: ${quantity || "Not specified"}`,
      "",
      "Project Details:",
      project,
    ];

    const subject = encodeURIComponent("New Project Enquiry — House of Brands");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setNote({ message: "Opening your email client with your enquiry…", kind: "success" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors";

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-[#ededed] py-20 md:py-40 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-6 block">
            Build Your Brand With Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tighter mb-6">
            Let&apos;s discuss your product requirements.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl">
            For private label manufacturing, product development, and retail partnerships.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <label htmlFor="cf-name" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
                Full Name<span aria-hidden="true">*</span>
              </label>
              <input id="cf-name" name="fullName" type="text" autoComplete="name" required className={inputClass} />
            </div>

            <div>
              <label htmlFor="cf-company" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
                Company Name<span aria-hidden="true">*</span>
              </label>
              <input id="cf-company" name="company" type="text" autoComplete="organization" required className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="cf-email" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
                Email Address<span aria-hidden="true">*</span>
              </label>
              <input id="cf-email" name="email" type="email" autoComplete="email" required className={inputClass} />
            </div>
          </div>

          <fieldset>
            <legend className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">
              Product Category<span aria-hidden="true">*</span>
            </legend>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CATEGORIES.map((cat) => {
                const active = categories.includes(cat);
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    aria-pressed={active}
                    className={`text-left text-sm px-4 py-3 border rounded-sm transition-colors duration-300 ${
                      active
                        ? "border-white bg-white text-black"
                        : "border-white/20 text-gray-300 hover:border-white/60"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">
              Estimated Quantity
            </legend>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {QUANTITIES.map((qty) => (
                <label
                  key={qty}
                  className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer px-4 py-3 border border-white/20 rounded-sm hover:border-white/60 transition-colors has-[:checked]:border-white has-[:checked]:bg-white/5"
                >
                  <input type="radio" name="quantity" value={qty} className="accent-white" />
                  {qty}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="cf-project" className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
              Tell Us About Your Project<span aria-hidden="true">*</span>
            </label>
            <textarea
              id="cf-project"
              name="project"
              rows={5}
              required
              placeholder="Product details, branding requirements, target market, or reference products."
              className="w-full bg-transparent border border-white/20 rounded-sm p-4 text-lg text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <button
              type="submit"
              className="bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-gray-200 transition-colors"
            >
              Request a Consultation
            </button>
            {note && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${note.kind === "error" ? "text-red-400" : "text-green-400"}`}
              >
                {note.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
