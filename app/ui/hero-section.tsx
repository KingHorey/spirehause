import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start justify-center py-10 space-y-5">
      <div className="lg:w-1/2 xs:w-full space-y-5">
        <h1 className="font-extrabold xs:text-5xl md:text-4xl lg:text-6xl">
          Great Architecture,
        </h1>
        <h1 className="font-extrabold xs:text-5xl md:text-4xl lg:text-6xl">
          Great Building
        </h1>
        <p className="lg:text-base md:text-sm text-deepBlue/80">
          Spirehaus represents architectural innovation at the intersection of
          business and design. Our buildings are more than workspaces -
          they&aposre dynamic environments that inspire collaboration, reflect
          corporate identity, and create seamless experiences for modern
          enterprises. By combining cutting-edge architectural principles with
          functional excellence, Spirehaus transforms how businesses interact
          with their physical infrastructure.
        </p>
        <Button
          asChild
          variant="outline"
          className="bg-deepBlue hover:text-white text-white hover:bg-deepBlue/90 duration-300 border-primary p-6 transition-colors rounded-full"
        >
          <Link href="/contact-us" className="rounded-full text-base">
            Contact Us
          </Link>
        </Button>
      </div>

      <Image
        width={1400}
        height={500}
        src="/Hero Landscape Image Container.png"
        alt="hero image"
        className="object-cover w-full rounded-2xl"
      />
    </div>
  );
};

export default HeroSection;
