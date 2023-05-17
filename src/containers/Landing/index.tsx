import { useState } from "react";
import { NavBar } from "@/components/navBar";

export const Landing: React.FC = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  return (
    <div>
      <NavBar />
      landing
    </div>
  );
};
