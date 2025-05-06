import { Suspense} from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <main className="flex-1 mx-auto px-4 flex items-center justify-center ">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;