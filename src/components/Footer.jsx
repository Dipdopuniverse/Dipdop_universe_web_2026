import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      url: "https://web.facebook.com/dipdop.id?_rdc=1&_rdr",
    },
    { icon: <Twitter size={18} />, url: "https://twitter.com/dipdop_id" },
    { icon: <Globe size={18} />, url: "https://g.page/dipdop?we" }, // Google Business
    {
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/company/dipdop",
    },
    {
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/dipdop.id/",
    },
    {
      icon: <Youtube size={18} />,
      url: "https://www.youtube.com/@dipdopindonesia",
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 md:px-12">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Kiri: Logo Section */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            {/* h-8 atau h-10 biasanya ukuran standar footer agar tidak terlalu dominan */}
            <img
              src="https://dipdop.net/wp-content/uploads/2019/12/footer-widget.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Tengah: Copyright */}
        
        <div className="text-gray-500 text-[12px] md:text-sm font-medium order-3 md:order-2 text-center md:text-left">
           © {currentYear} PT DIPDOP UNIVERSE CORP
        </div>

        {/* Kanan: Social Media */}
        <ul className="flex items-center gap-3 order-2 md:order-3">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#358dad] text-white hover:bg-[#99daf1] transition-colors duration-300"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
