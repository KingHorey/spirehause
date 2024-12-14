/* eslint-disable @next/next/no-img-element */

const ImageCard = ({
  image,
  text,
  description,
}: {
  image: string;
  text?: string;
  description?: string;
}) => {
  return (
    <div className="rounded-2xl relative">
      <img
        src={image}
        className="w-full lg:min-w-[320px] lg:max-w-[500px]  h-[560px] rounded-2xl"
        alt={text}
      />
      {text && (
        <div className="absolute bottom-0 z-[999] p-5 backdrop-blur-lg w-full rounded-2xl">
          <p className="text-white text-base font-semibold">{text}</p>
          <p className="text-white text-base">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
