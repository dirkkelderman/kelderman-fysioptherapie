import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { Content } from "@prismicio/client";

import { Bounded } from "../../components/Bounded";

export type TextProps = SliceComponentProps<Content.TextSlice>;

const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <Bounded as="section" yPadding="sm" className="bg-white leading-relaxed">
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6"
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
