import * as prismic from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

import { Content } from "@prismicio/client";
import Image from "next/image";

export type HeroSliceType = SliceComponentProps<Content.HeroSlice>;

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }: HeroSliceType): JSX.Element => {
  const backgroundImage = slice.primary.backgroundImage;

  const buttonLink = prismic.isFilled.link(slice.primary.buttonLink) ? (
    <PrismicLink
      field={slice.primary.buttonLink}
      className="rounded bg-[#9BCD9B] px-5 py-3 font-medium text-slate-800"
    >
      {slice.primary.buttonText || "Learn More"}
    </PrismicLink>
  ) : null;

  return (
    <section className="relative bg-slate-900 text-white">
      {/* Background image overlay */}
      {prismic.isFilled.image(backgroundImage) && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt || "Background"}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="z-0 opacity-40" // Overlay effect
          priority // Load it as a priority image for faster LCP
        />
      )}

      {/* Content of the section */}
      <Bounded yPadding="lg" className="relative z-10">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          {buttonLink}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
