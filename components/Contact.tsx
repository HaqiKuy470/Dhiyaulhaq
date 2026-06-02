"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name.trim() || !message.trim()) return;

    const text = `Halo Haqi! Saya *${name}* ingin menghubungimu.\n\n${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6285111422715?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-cyan-400 border-b-8 border-black font-mono">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

          <div className="inline-block bg-pink-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] mb-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              Contact
            </h2>
          </div>

          <div className="space-y-6 font-bold text-black">
            <div className="space-y-2">
              <label className="block text-sm uppercase">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border-4 border-black focus:bg-yellow-200 outline-none transition-all shadow-[4px_4px_0px_0px_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1"
                placeholder="Namamu"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border-4 border-black h-32 focus:bg-yellow-200 outline-none transition-all shadow-[4px_4px_0px_0px_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1 resize-none"
                placeholder="Tulis pesanmu di sini..."
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full bg-green-400 py-4 text-xl font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" /> Send via WhatsApp
            </button>

            <p className="text-xs text-center text-gray-500 font-bold">
              Akan membuka WhatsApp dengan pesan otomatis
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}