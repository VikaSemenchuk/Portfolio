import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header, Footer } from '@/components/Layout'

import { useLanguageStore } from "@/store";

const Layout = () => {
  const language = useLanguageStore((state) => state.language);
   const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);


  useEffect(() => {
  window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <main className="flex-1 mx-auto px-4 flex items-center justify-center min-h-[80vh] ">
          <div>
            <Outlet />
          </div>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;