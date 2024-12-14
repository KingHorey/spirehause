import ProfileCard from "@/app/ui/about-us-ui/management-profile-card";
import PageHeader from "@/app/ui/page-headers";

const managementTeam = [
  {
    image: "/ali-morshedlou-WMD64tMfc4k-unsplash(1).jpg",
    text: "Marcus Reyes",
    role: "Founder & Chief Executive Officer",
  },
  {
    image: "/andre-styles-pq9npYMirk8-unsplash(1).jpg",
    text: "Elena Kovač",
    role: "Co-Founder & Chief Design Officer",
  },
  {
    image: "/the-drink-72YQbAluczo-unsplash.jpg",
    text: "James Thompson",
    role: "Co-Founder & Chief Strategic Officer",
  },
  {
    image: "/jack-lopez-prOT0K6o45A-unsplash(1).jpg",
    text: "Sarah Chen",
    role: "Chief Financial Officer",
  },

  {
    image: "/joshua-oluwagbemiga-8qFarlWZY-U-unsplash(1).jpg",
    text: "Joshua Oluwagbemiga",
    role: "Chief Operations Officer",
  },
];

const Page = () => {
  return (
    <main className="space-y-10 py-10 mb-20">
      <PageHeader
        text="About Us"
        details="Here are some of the things you need to know about us"
      />
      <section id="our-history" className="space-y-3">
        <h2 className="text-4xl font-semibold">Our Story...</h2>
        <div className="space-y-3">
          <p>
            Founded in 2010, Spirehaus emerged from a bold vision: to reimagine
            architectural design as a transformative force in business
            environments. What started in a small studio with three passionate
            architects has grown into a global design firm that challenges
            traditional notions of corporate spaces.
          </p>
          <p>
            Our journey began when our founders — Marcus Reyes, Elena Kovač, and
            James Thompson—recognized a critical gap in corporate architecture.
            They saw buildings not just as physical structures, but as living
            narratives that could fundamentally shape organizational culture and
            human potential.
          </p>{" "}
          <p>
            In those early years, we took risks. We rejected cookie-cutter
            design approaches and instead championed innovative concepts that
            prioritized human interaction, technological integration, and
            sustainable thinking. Our first breakthrough project—a revolutionary
            tech campus in Silicon Valley—put us on the map, demonstrating how
            intelligent design could become a strategic business asset.
          </p>
          <p>
            Over the past decade, we&apos;ve expanded across three continents,
            working with visionary companies that understand architecture&apos;s
            power. From sleek urban headquarters to adaptive research centers,
            each project reflects our core belief: spaces should inspire,
            connect, and propel organizations forward.
          </p>
          <p>
            Today, Spirehaus represents more than an architectural firm. We are
            design strategists, innovation partners, and storytellers who
            believe that great buildings are the foundation of great
            enterprises.
          </p>
          <p>
            Our story continues to evolve, driven by curiosity, creativity, and
            an unwavering commitment to transforming how the world works.
          </p>
        </div>
      </section>
      <section className="space-y-10">
        <h2 className="text-4xl font-semibold">Board Members</h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {managementTeam.map(({ image, text, role }, index: number) => (
            <ProfileCard key={index} image={image} text={text} role={role} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
