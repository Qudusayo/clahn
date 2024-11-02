import Footer from "./components/organism/footer";
import Navbar from "./components/organism/navbar";

const Layout = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className={`flex min-h-screen flex-col bg-[#F9F9F9] ${className}`}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
