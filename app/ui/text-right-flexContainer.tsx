import ImageCard from "./images-card";

const RightTextContainer = ({
  text,
  image,
}: {
  text: React.ReactElement;
  image: string;
}) => {
  return (
    <div className="lg:px-10 flex xs:gap-y-5 flex-col-reverse gap-x-5 md:flex-row items-center justify-between xs:space-y-5 md:space-y-0">
      <ImageCard image={image} />
      <div className="md:w-2/4 md:space-y-3 lg:space-y-5">{text}</div>
    </div>
  );
};

export default RightTextContainer;
