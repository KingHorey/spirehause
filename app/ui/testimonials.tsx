import Image from "next/image";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    text: "Spirehaus doesn't just build structures; they create ecosystems. Our new headquarters transformed how our team collaborates and thinks about workspace design. Absolutely revolutionary!",
    user: "Alex Nduka",
    role: "CEO, TechNova Solutions",
  },
  {
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Precision, creativity, and unparalleled expertise - Spirehaus delivered beyond our wildest expectations. Their design not only meets our current needs but anticipates our future growth. They're not just architects; they're strategic partners in our corporate journey.",
    user: "Philip Adeniyi",
    role: "Founder, Quantum Dynamics Group",
  },
  {
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    text: "Working with Spirehaus was a game-changer. Their architectural vision perfectly balanced functionality and inspiration. They understood our corporate culture and translated it into a physical environment that energizes our entire organization.",
    user: "Jessica Hings",
    role: "Chief Operating Officer, Global Innovations Inc.",
  },
];

const Testimonials = () => {
  return (
    <section className="space-y-5 py-5">
      <h2 className="text-black font-semibold text-2xl">Testimonials</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        {testimonials.map(({ image, text, user, role }, index: number) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-md p-5 flex flex-col gap-5 justify-evenly"
          >
            <div className="flex items-center gap-x-5">
              <Image
                src={image}
                width={30}
                height={30}
                className="rounded-full object-cover"
                alt={user}
              />
              <div>
                <p>{user}</p>
                <p className="text-deepBlue/80 text-sm">{role}</p>
              </div>
            </div>
            <p className="md:text-sm xs:text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
