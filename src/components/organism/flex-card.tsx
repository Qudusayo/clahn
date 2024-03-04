import Button from "../ui/button";

const FlexCard = ({
  title,
  image,
  content,
  buttonTitle,
  reversed,
  borderPositon,
}: {
  title: string;
  image: string;
  content: string;
  buttonTitle?: string;
  reversed?: boolean;
  borderPositon?: "top-right" | "bottom-left";
}) => {
  return (
    <div className="mx-auto my-24 grid max-w-screen-xl grid-cols-1 gap-10 lg:grid-cols-2 md:gap-20">
      <div className="relative mx-auto w-4/5 max-w-[600px]">
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
        className={`mx-auto flex w-4/5 flex-col items-start justify-center  gap-4 md:gap-8 ${
          reversed ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-4xl font-bold"> {title} </h2>
        <p className="text-base font-medium"> {content} </p>
        {buttonTitle && <Button>{buttonTitle}</Button>}
      </div>
    </div>
  );
};

export default FlexCard;
