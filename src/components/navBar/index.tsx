"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { portfolioLinks } from "@/utils/constants";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const NavBar: React.FC = (): JSX.Element => {
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/", current: pathname === "/" },
    { name: "About Me", href: "/about", current: pathname === "/about" },
    {
      name: "Tech Stack",
      href: "/stacks",
      current: pathname === "/stacks",
    },
    {
      name: "Projects",
      href: "/projects",
      current: pathname === "/projects",
    },
  ];

  // change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollOffset = 20;

      if (scrollTop > scrollOffset) {
        setNavbarBackground("bg-blue-900 bg-opacity-90");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-transparent fixed left-0 right-0">
      {({ open }) => (
        <div className={navbarBackground}>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-24 lg:px-24">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="rounded-full"
                      src="/images/icon-avatar.jpeg"
                      alt="logo"
                      width={56}
                      height={56}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 mr-2">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className={classNames(
                          item.current
                            ? "text-blue-500 cursor-default"
                            : "text-blue-200 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between space-x-4 pl-6 border-l border-blue-200">
                  <a href={portfolioLinks.github} target="_blank">
                    <GithubIcon />
                  </a>
                  <a href={portfolioLinks.linkedin} target="_blank">
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="ml-4 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium w-full"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
