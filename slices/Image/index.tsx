import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Content } from "@prismicio/client";

import { Bounded } from "../../components/Bounded";
import { SliceComponentProps } from "@prismicio/react";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice, index }: ImageProps): JSX.Element => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismic.isFilled.image(image) && (
        <div
          className={clsx(
            "bg-gray-100",
            slice.variation === "regularImage" && "mx-auto w-2/3 md:w-5/12 "
          )}
        >
          <PrismicNextImage field={image} layout="responsive" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
