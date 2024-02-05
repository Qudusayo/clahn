import Footer from "./components/organism/footer";
import Navbar from "./components/organism/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto scroll-smooth h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
