import "./globals.css";
import { League_Spartan } from "next/font/google";
import { NavBar } from "@/components/navBar";

const leagueSpartan = League_Spartan({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jillo Woche",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <section>
          <NavBar />
        </section>
        {children}
      </body>
    </html>
  );
}
