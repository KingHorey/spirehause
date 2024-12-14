import HeroSection from "./ui/hero-section";
import LeftTextContainer from "./ui/text-left-flexContainer";

import ImageCard from "./ui/images-card";
import Testimonials from "./ui/testimonials";

const projects = [
  {
    title: "Architectural Design",
    project: [
      {
        image: "/Design & Building projects Image container.png",
        text: "The Dome Center",
        description: "Central Business District Abuja",
      },
      {
        image: "/simone-hutsch-ItvVUpgac0o-unsplash(1).jpg",
        text: "",
        description: "",
      },
      {
        image: "/mark-boss-YoDlrVtyl6o-unsplash(1).jpg",
        text: "Ray and Maria Stata Center",
        description: "Cambridge, England",
      },
    ],
  },
  {
    title: "Our Buildings",
    project: [
      {
        image: "/tolu-olubode-PlBsJ5MybGc-unsplash(1).jpg",
        text: "",
        description: "",
      },
      {
        image: "/simone-hutsch-l8fyK9RS-OU-unsplash(1).jpg",
        text: "",
        description: "",
      },
      {
        image: "/troy-mortier-W375t_HvjCc-unsplash.jpg",
        text: "",
        description: "",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="space-y-10">
      <HeroSection />
      <LeftTextContainer
        text={
          <>
            <div>
              <h2 className="text-lg font-semibold">Company Overview</h2>
              <p className="text-deepBlue/90 xs:text-xs md:text-sm lg:text-base">
                At Spirehaus, we design transformative architectural solutions
                that redefine corporate spaces. Our expertise bridges innovative
                design with strategic functionality, creating environments that
                inspire productivity, reflect brand identity, and enhance
                workplace performance.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Our Philosophy</h2>
              <p className="text-deepBlue/90 xs:text-xs md:text-sm lg:text-base">
                We believe architecture is more than construction - it&apos;s
                about crafting intelligent spaces that communicate a
                company&apos;s vision. By integrating cutting-edge design
                principles with human-centric approaches, we create buildings
                that are living, breathing extensions of organizational culture.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Our Mission Statement</h2>
              <p className="text-deepBlue/90 xs:text-xs md:text-sm lg:text-base">
                To revolutionize corporate architecture by delivering
                exceptional, forward-thinking design solutions that empower
                businesses to thrive. We transform physical spaces into
                strategic assets that drive innovation, collaboration, and
                sustainable growth.
              </p>
            </div>
          </>
        }
        image="/about us section image container.png"
      />
      <section className="space-y-5">
        {projects.map(({ title, project }, index: number) => (
          <>
            <h2 className="font-semibold text-xl" key={index}>
              {title}
            </h2>
            <div className="flex xs:flex-col xs:gap-y-5 md:flex-row gap-x-5 py-5">
              {project.map(({ image, text, description }, count: number) => (
                <ImageCard
                  image={image}
                  text={text}
                  description={description}
                  key={count}
                />
              ))}
            </div>
          </>
        ))}
      </section>
      <Testimonials />
    </main>
  );
}
