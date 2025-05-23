import { Suspense, useEffect} from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import { useLanguageStore } from "../../store/useLanguageStore";

const Layout = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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