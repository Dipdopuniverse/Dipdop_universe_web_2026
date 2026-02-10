import React, { useState, useEffect } from 'react';
import dipdop from '/dipdop.svg';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#overview' },
        { name: 'Ecosystem', href: '#ecosystem' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Partners', href: '#partners' },
        { name: 'Portofolio', href: '#portofolio' },
        { name: 'Collaborator', href: '#collaborator' },
        { name: 'Testimony', href: '#testimoni' },
    ];

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm h-16' : 'bg-[#E5E5E5] h-20'
            }`}
        >
            <div className="mx-auto h-full px-4 md:px-8 flex justify-between items-center">
                
                {/* LOGO AREA */}
                <div className="flex items-center gap-4">
                    <div className='h-10 md:h-12 aspect-square'>
                        <img src={dipdop} alt="dipdop" className='w-full h-full object-contain' />
                    </div>
                    {/* Hidden on mobile to save space */}
                    <div className="hidden lg:block border-l border-gray-400 pl-4">
                        <p className='text-xs font-black text-gray-800 leading-tight tracking-tighter'>
                            PT DIPDOP <br /> UNIVERSE CORP
                        </p>
                    </div>
                </div>

                {/* NAVIGATION AREA (Anchor Links) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-gray-800 hover:text-[#588A96] transition-colors relative group"
                        >
                            {link.name}
                            {/* Animated Underline */}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#588A96] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* TAGLINE / CTA MINI */}
                <div className='flex items-center gap-4'>
                    <a 
                        href="#contact" 
                        className="bg-[#588A96] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-black transition-all shadow-md"
                    >
                        START COLLAB
                    </a>
                </div>
            </div>
        </header>
    );
}