import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  console.log("slice", slice, "Index", index);

  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismicH.isFilled.image(image) && (
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
