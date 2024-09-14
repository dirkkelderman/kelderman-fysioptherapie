import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import clsx from "clsx";

/**
 * Props for `RichtText`.
 */
export type RichtTextProps = SliceComponentProps<Content.RichtTextSlice>;

/**
 * Component for "RichtText" Slices.
 */
const RichtText = ({ slice }: RichtTextProps): JSX.Element => {
  return (
    <Bounded as="section" yPadding="base" className="bg-white leading-relaxed">
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

export default RichtText;
