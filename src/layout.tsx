import Footer from "./components/organism/footer";
import Navbar from "./components/organism/navbar";
import { cn } from "./util";

const Layout = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className={cn("flex min-h-screen flex-col bg-[#F9F9F9]", className)}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
