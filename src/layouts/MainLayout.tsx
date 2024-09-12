import { Outlet } from "react-router-dom";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
