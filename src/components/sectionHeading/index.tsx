interface SectionHeadingProps {
  titleMain: string;
  titleSub: string;
  description: string | JSX.Element;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  titleMain,
  titleSub,
  description,
}): JSX.Element => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white text-center">
        {titleSub} <span className="text-blue-500">{titleMain}</span>
      </h1>
      <h2 className="text-lg text-white mt-4 text-center">{description}</h2>
    </div>
  );
};
