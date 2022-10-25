import clsx from "clsx";

interface CompProps {
  as?: React.ElementType;
  yPadding?: string;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Bounded = ({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}: CompProps) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6",
        yPadding === "xs" && "py-6 md:py-8",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
};
