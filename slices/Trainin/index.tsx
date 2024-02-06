import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

/**
 * Props for `Trainin`.
 */
export type TraininProps = SliceComponentProps<Content.TraininSlice>;

/**
 * Component for "Trainin" Slices.
 */
const Trainin = ({ slice }: TraininProps): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.description} />
      <iframe
        src="https://work-out-mom.trainin.app/widget/schedule?listing=public&location=NZQDK"
        style={{ width: "100%", height: "650px", border: "none" }}
      ></iframe>
    </Bounded>
  );
};

export default Trainin;
