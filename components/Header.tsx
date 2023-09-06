import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import Image from "next/image";
import { useState } from "react";

export const Header = ({ navigation, settings, isOpen }) => {
  const image = settings.data.logo;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Bounded as="header" yPadding="xs">
      <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-3 leading-none lg:justify-between">
        <PrismicLink href="/" className=" text-xl font-semibold tracking-tight">
          <div className="flex items-center">
            <div className="flex items-center px-3">
              <Image
                src={image.url}
                alt={image.alt}
                width="30"
                height="30"
                layout="fixed"
                objectFit="contain"
              />
            </div>
            <div className="">
              <PrismicText field={settings.data.siteTitle} />
            </div>
          </div>
        </PrismicLink>
        <nav>
          <ul className="hidden flex-wrap gap-6 md:flex  md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>

          <button
            className="rounded-md border border-slate-800 px-4 py-2 font-semibold tracking-tight text-slate-800 md:hidden"
            onClick={toggleMenu}
          >
            MENU
          </button>

          <div
            className={`fixed top-0 left-0 z-10 h-full w-full bg-white ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="mt-16">
              <ul className="flex flex-col gap-4 text-center">
                {navigation.data?.links.map((item) => (
                  <li
                    key={prismicH.asText(item.label)}
                    className="font-semibold tracking-tight text-slate-800"
                  >
                    <PrismicLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              Sluiten
            </button>
          </div>
        </nav>
      </div>
    </Bounded>
  );
};
