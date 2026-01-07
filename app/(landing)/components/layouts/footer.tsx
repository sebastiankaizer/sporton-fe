import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-52 bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-[420px]">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />

          <p className="mt-8 leading-relaxed text-white/90">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="grid w-[420px] grid-cols-2">
          <div className="flex flex-col gap-7">
            <Link className="transition hover:text-white/80" href="#">
              Home
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              Categories
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              Products
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              About Us
            </Link>
          </div>

          <div className="flex flex-col gap-7">
            <Link className="transition hover:text-white/80" href="#">
              Instagram
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              Facebook
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              TikTok
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              YouTube
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto flex justify-between py-6">
          <div className="text-white/80">
            SportsOn © 2025 All Rights Reserved.
          </div>

          <div className="grid w-[420px] grid-cols-2">
            <Link className="transition hover:text-white/80" href="#">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-white/80" href="#">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
