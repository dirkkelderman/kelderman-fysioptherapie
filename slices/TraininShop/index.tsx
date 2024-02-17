import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { useEffect, useRef } from "react";

/**
 * Props for `TraininShop`.
 */
export type TraininShopProps = SliceComponentProps<Content.TraininShopSlice>;

/**
 * Component for "TraininShop" Slices.
 */
const TraininShop = ({ slice }: TraininShopProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      yPadding="xs"
      className="bg-white leading-relaxed md:px-60"
    >
      <PrismicRichText field={slice.primary.text} />

      <iframe
        src="https://work-out-mom.trainin.app/widget/shop"
        style={{ width: "100%", height: "750px", border: "none" }}
      ></iframe>
    </Bounded>
  );
};

export default TraininShop;
