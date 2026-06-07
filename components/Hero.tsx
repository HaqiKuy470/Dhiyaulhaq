"use client";

import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Instagram, Youtube, Music, Download } from "lucide-react";
import Link from "next/link";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function Hero() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <div className="text-green-600 font-bold space-y-1">
          <p>🖥️ Welcome to HAQI.EXE [Version 1.0.0]</p>
          <p>Type <span className="bg-yellow-300 text-black px-1 border border-black font-black">help</span> to list all available commands.</p>
          <p className="text-gray-400">------------------------------------</p>
        </div>
      )
    }
  ]);
  const [isGlitched, setIsGlitched] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    const cmdLower = cmd.toLowerCase();
    if (!cmdLower) return;

    let output: React.ReactNode = "";

    switch (cmdLower) {
      case "help":
        output = (
          <div className="space-y-1 text-black">
            <p className="font-black">AVAILABLE COMMANDS:</p>
            <p><span className="text-blue-600 font-black">about</span>      - Quick bio about Dhiyaulhaq</p>
            <p><span className="text-blue-600 font-black">skills</span>     - Core tech stack & tools</p>
            <p><span className="text-blue-600 font-black">certs</span>      - Certification achievements</p>
            <p><span className="text-blue-600 font-black">contact</span>    - Social links & contact</p>
            <p><span className="text-blue-600 font-black">coffee</span>     - Dispense a virtual coding drink ☕</p>
            <p><span className="text-red-500 font-black">sudo rm -rf</span> - WARNING: Do not execute!</p>
            <p><span className="text-blue-600 font-black">clear</span>      - Clear the console</p>
          </div>
        );
        break;
      case "about":
        output = (
          <p className="text-black leading-relaxed">
            Informatics Engineering student at Universitas Negeri Malang specializing in AI integration and fullstack software architecture. Passionate about building automated digital ecosystems.
          </p>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-1 text-black">
            <p className="font-black">FRONTEND: <span className="font-normal">Next.js, React, Flutter, TypeScript</span></p>
            <p className="font-black">BACKEND: <span className="font-normal">Node.js, Express, Python, SQL (MySQL, PostgreSQL)</span></p>
            <p className="font-black">AUTOMATION & AI: <span className="font-normal">n8n, Gemini API, OpenCV, Docker</span></p>
          </div>
        );
        break;
      case "certs":
        output = (
          <p className="text-black leading-relaxed">
            Total of <span className="font-black bg-cyan-300 px-1 border border-black">20+ verified certificates</span> from Dicoding (Google Cloud, Python, AI, Machine Learning), Microsoft, and Udemy. <Link href="/certificates" className="underline font-black text-blue-700 hover:text-black">Click here to browse all certs.</Link>
          </p>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 text-black">
            <p>Email: <span className="font-black">mohdhiyaulhaq.u@gmail.com</span></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/moh-dhiyaulhaq/" target="_blank" className="underline font-black text-blue-700 hover:text-black">moh-dhiyaulhaq</a></p>
            <p>GitHub: <a href="https://github.com/haqikuy470" target="_blank" className="underline font-black text-blue-700 hover:text-black">haqikuy470</a></p>
          </div>
        );
        break;
      case "coffee":
        output = (
          <div className="text-orange-700 font-mono space-y-2">
            <pre className="text-xs leading-none">{`    (  )   (  )
     ) (    ) (
    .-----.-----.
    |     |     |___
    |     |     | - |
    |     |     |___|
    \`-----'-----'\n`}</pre>
            <p className="font-black text-sm text-black">☕ Coffee dispensed! Coding energy and focus at max capacity!</p>
          </div>
        );
        break;
      case "sudo rm -rf":
        setIsGlitched(true);
        setInput("");
        return;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = (
          <p className="text-red-600 font-bold">
            Command not found: "{cmd}". Type <span className="underline">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const rebootSystem = () => {
    setIsGlitched(false);
    setHistory([
      {
        command: "",
        output: (
          <div className="text-green-600 font-bold space-y-1">
            <p>🖥️ System Rebooted Successfully.</p>
            <p>Type <span className="bg-yellow-300 text-black px-1 border border-black font-black">help</span> for options.</p>
            <p className="text-gray-400">------------------------------------</p>
          </div>
        )
      }
    ]);
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-32 md:pt-40 bg-[#f4f4f0] text-black font-mono border-b-8 border-black overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 md:space-y-8 z-10">
          
          <div className="inline-block px-4 py-2 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-black text-xs font-bold uppercase tracking-widest">
              State University of Malang
            </span>
          </div>

          <div className="py-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter">
              Hi, I'm <br />
              <span className="bg-cyan-400 px-2 mt-2 inline-block border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                Dhiyaulhaq
              </span>
            </h1>
          </div>

          <p className="text-black font-bold text-sm md:text-lg max-w-lg leading-relaxed bg-pink-400 p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Informatics Engineering student specializing in AI integration and software architecture. Expert in building SaaS ecosystems and automated digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link 
              href="/cv" 
              className="px-8 py-3 bg-green-400 text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
            >
              <Download className="w-6 h-6" /> View CV
            </Link>

            <div className="flex items-center gap-2 bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <SocialIcon href="https://github.com/haqikuy470" icon={<Github className="w-6 h-6" />} />
              <SocialIcon href="https://www.linkedin.com/in/moh-dhiyaulhaq/" icon={<Linkedin className="w-6 h-6" />} />
              <SocialIcon href="https://instagram.com/haqikuy" icon={<Instagram className="w-6 h-6" />} />
              <SocialIcon href="https://youtube.com/@haqikuy" icon={<Youtube className="w-6 h-6" />} />
              <SocialIcon href="https://tiktok.com/@haqikuy" icon={<Music className="w-6 h-6" />} />
            </div>
          </div>
        </div>

        <div className="relative hidden md:block w-full">
          <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
          
          <div className="w-full relative border-4 border-black bg-white flex flex-col">
            <div className="bg-blue-600 text-white px-4 py-2 border-b-4 border-black flex justify-between items-center">
              <span className="font-bold uppercase tracking-widest text-sm">developer.exe</span>
              <div className="flex gap-2">
                <button onClick={rebootSystem} className="w-4 h-4 bg-white border-2 border-black hover:bg-black transition-colors cursor-pointer" title="Reboot" />
                <div className="w-4 h-4 bg-white border-2 border-black hover:bg-black transition-colors cursor-pointer" />
                <button onClick={() => setIsGlitched(true)} className="w-4 h-4 bg-red-500 border-2 border-black hover:bg-red-600 transition-colors cursor-pointer" title="Crash" />
              </div>
            </div>
            
            {isGlitched ? (
              <div className="p-6 bg-blue-700 text-white font-mono h-[350px] flex flex-col justify-between overflow-y-auto border-t-0 select-none">
                <div className="space-y-4">
                  <h3 className="bg-white text-blue-700 font-black px-2 py-1 text-center w-fit text-sm">⚠️ CRITICAL_SYSTEM_ERROR ⚠️</h3>
                  <p className="font-bold text-sm">A fatal exception OE has occurred at 0028:C0011E36 in VXD VMM(01).</p>
                  <p className="text-xs leading-relaxed">
                    You executed "sudo rm -rf" and recursively wiped the root directory. All system binaries, profiles, and assets have been deleted from memory.
                  </p>
                  <p className="text-xs text-blue-200 animate-pulse">* Press the button below or close window to reboot.</p>
                </div>
                <button 
                  onClick={rebootSystem}
                  className="mt-4 w-full border-4 border-white bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 font-black uppercase text-xs shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
                >
                  Reboot System (Ctrl+Alt+Del)
                </button>
              </div>
            ) : (
              <div 
                className="p-6 font-bold text-xs sm:text-sm text-black bg-[#e5e5e5] h-[350px] flex flex-col justify-between cursor-text"
                onClick={focusInput}
              >
                {/* Terminal History */}
                <div className="overflow-y-auto flex-1 space-y-3 pr-2 scrollbar-thin">
                  {history.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      {item.command && (
                        <p className="text-gray-600">
                          haqi@developer:~$ <span className="text-black font-black">{item.command}</span>
                        </p>
                      )}
                      <div className="pl-2 border-l-2 border-black/20">{item.output}</div>
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Input Prompt */}
                <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4 pt-3 border-t-2 border-black/10">
                  <span className="text-gray-600 shrink-0">haqi@developer:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none font-bold text-black p-0 focus:ring-0"
                    placeholder="Type 'help'..."
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </form>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="text-black bg-transparent hover:bg-black hover:text-white transition-colors p-2 border-2 border-transparent hover:border-black flex items-center justify-center"
      aria-label="Social Media Link"
    >
      {icon}
    </a>
  );
}