import ImageCard from "@/app/ui/images-card";

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
  {
    title: "Completed Construction Projects",
    project: [
      {
        image: "/Project image container.png",
        text: "",
        description: "",
      },
      {
        image: "/Project Media Group.png",
        text: "",
        description: "",
      },
      {
        image: "/Project image container ii.png",
        text: "",
        description: "",
      },
    ],
  },
];

const Page = () => {
  return (
    <section className="space-y-10 py-20">
      {projects.map(({ title, project }, index: number) => (
        <>
          <h2
            className="font-semibold xs:text-3xl md:text-4xl lg:text-4xl xs:px-10 md:px-0"
            key={index}
          >
            {title}
          </h2>
          <div className="mt-10 xs:flex xs:flex-col xs:p-10 md:p-0 justify-center xs:gap-y-5 md:grid-cols-3 md:grid gap-x-10 py-5">
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
  );
};

export default Page;
