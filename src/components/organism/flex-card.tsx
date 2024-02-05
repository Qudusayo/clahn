import Button from "../ui/button";

const FlexCard = ({
  title,
  content,
  buttonTitle,
  reversed,
  borderPositon,
}: {
  title: string;
  content: string;
  buttonTitle: string;
  reversed?: boolean;
  borderPositon?: "top-right" | "bottom-left";
}) => {
  return (
    <div className="grid grid-cols-2 max-w-screen-xl mx-auto gap-10 my-24">
      <div className={`${reversed ? "order-2" : "order-1"} relative w-fit mx-auto`}>
        <img
          src="https://s3-alpha-sig.figma.com/img/387d/4417/a8772ef8cc7d3f6608b7cd7f1d12a192?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pe2TzfJzo5GfqJirevO5ZmvidYp3oeTowqV219MCiL1W8AoSe7-1eBYEsze-ZVHUmL~IX6Ze0sI3pZa6Ol2jBcx~K5Iilq7rblJD3IMOZY2lhjSvLVTqbQCtxBNxAwg3mzM7vx2g7wISuBdxvQsfgLF~iN7kfhSN8KJ57nAMG~y8fbs9uN1F1LIh0pVaecD1VKNL-goJtp3KDMUU3lezU68Fa84NtYYsx-KoQinQ0j718ORB715gbns76oQdsdEjZ8Ugqnre9amXq6PHlMgiAmbAWoRi2NqzAY4l3CepSzuCzfszNNNY8NEyu62cZgP4AnD3FcAhjq-1ZeAHwvVsQg__"
          alt="selfie"
          // Square image
          className="w-[491px] h-[420px] object-cover rounded-3xl"
        />
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
        <Button>{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default FlexCard;
