import Image from "next/image";
import { LocationIcon, MailIcon } from "@/components/icons";
import { Button } from "@/components/buttons";
export const Landing: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full h-full min-h-screen px-24">
      {/* intro message  */}
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-6xl">
          <span className="flex">
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
        <div className="flex flex-col space-y-2">
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
        <Button width="w-fit">
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
      <div className="flex flex-col flex-shrink-0 items-center justify-center">
        <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
          <div className="flex items-center justify-center p-3 rounded-full bg-blue-500">
            <Image
              className="rounded-full bg-blue-900 w-64 h-64"
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
