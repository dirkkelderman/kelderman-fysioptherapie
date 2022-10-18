import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

export const Header = ({ navigation, settings }) => {
  const image = settings.data.logo;
  return (
    <Bounded as="header" yPadding="xs">
      <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-3 leading-none lg:justify-between">
        <PrismicLink href="/" className=" text-xl font-semibold tracking-tight">
          <div className="flex items-center">
            <div className="px-3">
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
          <ul className="flex flex-wrap gap-6 md:gap-10">
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
      </div>
    </Bounded>
  );
};
