"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/editorial";
import { CONTACT } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const text = `Halo Haqi! Saya *${name}* ingin menghubungimu.\n\n${message}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const field =
    "w-full border-0 border-b border-paper/60 bg-transparent px-0 py-3 font-serif text-lg text-paper placeholder:text-[#9e968a] focus:border-accent-soft focus:ring-0 focus:outline-none";

  return (
    <section id="letters" aria-labelledby="letters-heading" className="scroll-mt-6 bg-ink text-paper">
      <Container className="grid grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-20 lg:py-24">
        <div data-reveal className="flex flex-col gap-5">
          <span className="label-mono text-accent-soft">07 · Letters</span>
          <h2
            id="letters-heading"
            className="font-display text-[3.25rem] leading-[0.98] font-medium tracking-[-0.03em] md:text-8xl lg:text-[6.5rem] lg:leading-[0.95]"
          >
            Let&apos;s build <span className="font-light italic">something.</span>
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="self-start font-display text-[1.375rem] font-light break-all italic underline decoration-1 underline-offset-[6px] hover:text-accent-soft md:text-[2.75rem] md:underline-offset-8"
          >
            {CONTACT.email}
          </a>
        </div>

        <form data-reveal onSubmit={handleSend} className="flex flex-col gap-5">
          <p className="label-mono !text-xs text-[#bdb5a6]">Or send a note on WhatsApp</p>
          <div>
            <label htmlFor="letter-name" className="label-mono !text-xs">
              Name
            </label>
            <input
              id="letter-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="letter-message" className="label-mono !text-xs">
              Message
            </label>
            <textarea
              id="letter-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              rows={3}
              className={`${field} resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim() || !message.trim()}
            className="label-mono flex min-h-12 items-center justify-between bg-paper px-5 text-ink hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send via WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </Container>
    </section>
  );
}
