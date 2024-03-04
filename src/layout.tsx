import Footer from "./components/organism/footer";
// import Navbar from "./components/organism/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh overflow-y-auto scroll-smooth">
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
