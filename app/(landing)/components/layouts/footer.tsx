import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        {/* Logo & Description */}
        <div className="w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="w-105 grid grid-cols-2">
          <div className="flex gap-7 flex-col">
            <Link href="/" className="hover:opacity-70 transition">Home</Link>
            <Link href="#" className="hover:opacity-70 transition">Categories</Link>
            <Link href="#" className="hover:opacity-70 transition">Products</Link>
            <Link href="/about-us" className="hover:opacity-70 transition">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#" className="hover:opacity-70 transition">Instagram</Link>
            <Link href="#" className="hover:opacity-70 transition">Facebook</Link>
            <Link href="#" className="hover:opacity-70 transition">TikTok</Link>
            <Link href="#" className="hover:opacity-70 transition">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between items-center text-sm">
          <div>SportsOn © {currentYear} All Rights Reserved.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;