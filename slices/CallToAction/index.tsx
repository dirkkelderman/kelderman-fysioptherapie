import * as prismic from "@prismicio/client";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const CallToAction = ({ slice }: CallToActionProps) => {
  const backgroundImage = slice.primary.image;

  return (
    <section
      className="relative bg-slate-900 text-white"
      style={{
        backgroundImage: prismic.isFilled.image(backgroundImage)
          ? `url(${backgroundImage.url})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to control opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Bounded content on top of the background and overlay */}
      <Bounded yPadding="base" className="relative z-10">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
          </div>
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          {prismic.isFilled.link(slice.primary.ctaLink) && (
            <PrismicLink
              field={slice.primary.ctaLink}
              className="rounded bg-[#9BCD9B] px-5 py-3 font-medium text-slate-800"
            >
              {<PrismicRichText field={slice.primary.ctaText} /> ||
                "Maak nu een afspraak"}
            </PrismicLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default CallToAction;
