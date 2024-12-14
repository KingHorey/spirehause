import Image from "next/image";

const ProfileCard = ({
  image,
  text,
  role,
}: {
  image: string;
  text: string;
  role: string;
}) => {
  return (
    <div className="relative shadow-md min-w-[300px] max-w-[350px] max-h-[400px] rounded-2xl flex flex-col group cursor-pointer">
      <Image
        width={400}
        height={500}
        className="w-full h-4/5 object-cover group-hover:backdrop-blur-md rounded-t-2xl transition-all duration-500"
        src={image}
        alt={text}
      />

      <div className="p-5">
        <p className="text-black text-xl font-semibold">{text}</p>
        <p className="text-black text-lg font-semibold ">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
