import * as prismic from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

import { Bounded } from "../../components/Bounded";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      {slice.variation === "textRight" ? (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            {prismic.isFilled.image(image) && (
              <div className="bg-gray-100">
                <PrismicNextImage field={image} layout="responsive" />
              </div>
            )}
          </div>
          <div>
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div>
            {prismic.isFilled.image(image) && (
              <div className="bg-gray-100">
                <PrismicNextImage field={image} layout="responsive" />
              </div>
            )}
          </div>
        </div>
      )}
    </Bounded>
  );
};

export default TextWithImage;
