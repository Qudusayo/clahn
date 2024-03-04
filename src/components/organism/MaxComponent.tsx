import clsx from "clsx";

const MaxComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("mx-auto w-[90%] max-w-screen-xl", className)}>
      {children}
    </div>
  );
};

export default MaxComponent;
