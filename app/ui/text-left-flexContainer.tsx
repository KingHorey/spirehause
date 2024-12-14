import ImageCard from "./images-card";

const LeftTextContainer = ({
  text,
  image,
}: {
  text: React.ReactElement;
  image: string;
}) => {
  return (
    <div className="lg:px-10 flex flex-col gap-x-5 md:flex-row items-center justify-between xs:space-y-5 md:space-y-0">
      <div className="md:w-2/4 md:space-y-3 lg:space-y-5">{text}</div>
      <ImageCard image={image} />
    </div>
  );
};

export default LeftTextContainer;
