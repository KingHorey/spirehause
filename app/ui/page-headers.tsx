const PageHeader = ({ text, details }: { text: string; details: string }) => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">{text}</h1>
      <p>{details}</p>
    </div>
  );
};

export default PageHeader;
