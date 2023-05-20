import Image from "next/image";
import { LocationIcon, MailIcon } from "@/components/icons";
import { Button } from "@/components/buttons";

export const Landing: React.FC = (): JSX.Element => {
  const handleCVDowndload = () => {
    window.open("/files/resume.pdf", "_blank");
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-start md:justify-between mt-32 lg:mt-0 w-full h-full min-h-screen px-2 md:px-24">
      {/* intro message  */}
      <div className="flex flex-col space-y-6 items-center md:items-start">
        <h1 className="font-bold text-6xl text-center md:text-left">
          <span className="flex justify-center md:justify-start md:w-full">
            Hi
            <Image
              src="/images/icon-waving.svg"
              alt="wave"
              height={48}
              width={48}
            />
            {","}
          </span>
          My name is <br />
          <span className="text-blue-500">Jillo Woche.</span>
          <br />I build things for web.
        </h1>
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <div className="flex items-center justify-start space-x-2">
            <LocationIcon className="fill-blue-200" />
            <span className="text-blue-200">
              {`Nairobi, Kenya (Remote or Hybrid)`}
            </span>
          </div>
          <a
            className="flex items-center justify-start space-x-2 hover:text-blue-500 group"
            href="mailto:jayloabdullahi@gmail.com?subject=Hello%20Jillo"
          >
            <MailIcon className="fill-blue-200" />
            <span className="text-blue-200">jayloabdullahi@gmail.com</span>
          </a>
        </div>
        <Button width="w-fit" handleClick={handleCVDowndload}>
          <div className="flex items-center justify-start space-x-2">
            <Image
              src="/images/icon-download.svg"
              alt="download"
              width={20}
              height={20}
            />
            <span>Download CV</span>
          </div>
        </Button>
      </div>

      {/* image  */}
      <div className="flex flex-col flex-shrink-0 items-center justify-center mt-12 md:mt-0">
        <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center flex-shrink-0">
          <div className="flex items-center justify-center p-3 rounded-full bg-blue-500">
            <Image
              className="rounded-full bg-blue-900 w-64 h-64 flex-shrink-0"
              src="/images/icon-me.webp"
              alt="doodles"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
