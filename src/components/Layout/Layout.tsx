import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import useThemeStore from "../../store/useThemeStore";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {

    const {theme, setTheme} = useThemeStore()

    useEffect(() => {
        setTheme(theme)
    }, [theme, setTheme])
  // const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <main className="flex-1 container mx-auto px-4 flex items-center justify-center ">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;