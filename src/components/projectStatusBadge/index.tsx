export const ProjectStatusBadge: React.FC<{ isProjectComplete: boolean }> = ({
  isProjectComplete,
}) => {
  let color, bgColor;
  if (isProjectComplete) {
    color = "text-green-500";
    bgColor = "bg-green-500";
  } else {
    color = "text-yellow-500";
    bgColor = "bg-yellow-500";
  }

  return (
    <div
      className={`w-fit flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-opacity-5 ${bgColor}`}
    >
      <div className={`rounded-full w-2 h-2 ${bgColor}`}></div>
      <div className={`font-bold ${color}`}>
        {isProjectComplete ? "Complete" : "In Progress"}
      </div>
    </div>
  );
};
