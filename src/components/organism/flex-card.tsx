import clsx from "clsx";
import Button from "../ui/button";

const FlexCard = ({
  title,
  image,
  content,
  buttonTitle,
  reversed,
  borderPositon,
  className,
}: {
  title: string;
  image: string;
  content: string;
  buttonTitle?: string;
  reversed?: boolean;
  borderPositon?: "top-right" | "bottom-left";
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:gap-20 lg:grid-cols-2",
        className
      )}
    >
      <div className="relative mx-auto w-10/12 max-w-[600px]">
        <img
          src={image}
          alt="Your Image"
          className="z-10 h-full w-full rounded-t-3xl object-cover"
        />
        {borderPositon && borderPositon === "top-right" && (
          <div
            className="absolute -top-[4%] left-1/2 -z-10 h-2/4 w-[106%] -translate-x-1/2 transform rounded-t-3xl"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, transparent 65%, #038748 65%, #038748 100%)",
            }}
          ></div>
        )}
        {borderPositon && borderPositon === "bottom-left" && (
          <div
            className="absolute -bottom-[4%] left-1/2 -z-10 h-2/4 w-[106%] -translate-x-1/2 transform rounded-b-3xl"
            style={{
              background:
                "linear-gradient(to right, #F36F00 0%, #F36F00 35%, transparent 35%, transparent 100%)",
            }}
          ></div>
        )}
      </div>
      <div
        className={`mx-auto flex w-10/12 flex-col items-start justify-center ${
          reversed ? "lg:-order-1" : "order-1"
        }`}
      >
        <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6"> {title} </h2>
        <p className="text-[14px] md:text-base font-medium"> {content} </p>
        {buttonTitle && <Button className="mt-9">{buttonTitle}</Button>}
      </div>
    </div>
  );
};

export default FlexCard;
