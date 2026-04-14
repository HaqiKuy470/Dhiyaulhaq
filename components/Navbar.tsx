import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="text-xl font-black uppercase tracking-tighter bg-yellow-400 px-2 border-2 border-black">
          HAQI
        </Link>
        
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="font-bold uppercase text-sm hover:bg-cyan-400 px-2 transition-colors border-b-2 border-transparent hover:border-black"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="brutalist-button bg-pink-400 text-xs md:text-sm">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}