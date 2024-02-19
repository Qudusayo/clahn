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
    <div className="grid grid-cols-2 max-w-screen-xl mx-auto gap-20 my-24">
      <div
        className={`${reversed ? "order-2" : "order-1"} relative w-fit mx-auto`}
      >
        <img src={image} alt="selfie" className=" object-cover rounded-3xl" />
        {borderPositon && borderPositon === "top-right" && (
          <div className="bg-[#038748] w-[206px] h-[239px] rounded-t-3xl absolute -top-3 -right-3 -z-10"></div>
        )}
        {borderPositon && borderPositon === "bottom-left" && (
          <div className="bg-[#F36F00] w-[206px] h-[239px] rounded-b-3xl absolute -bottom-3 -left-3 -z-10"></div>
        )}
      </div>
      <div
        className={`flex flex-col items-start justify-center gap-8 ${
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
