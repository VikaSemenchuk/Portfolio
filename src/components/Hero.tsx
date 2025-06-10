import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { FiFileText, FiArrowRight } from "react-icons/fi";

import MyPhoto from "@/assets/hero-photo.png"
// import { LuArrowDownToLine } from "react-icons/lu";

const Hero = () => {
  const { t: tPages } = useTranslation('pages')
  const { t: tCommon } = useTranslation('common')

  return (
    <section className="section flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative">
              <img
                src={MyPhoto}
                alt={tPages("home.hero.photoAlt")}
                className=" w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] xl:w-[420px] xl:h-[520px] 
                          rounded-full xl object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {tPages("home.hero.title")}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-2xl mx-auto lg:mx-0">
              {tPages("home.hero.subtitle")}
            </p>

            <div className="flex flex-col md:flex-row lg:flex-col  xl:flex-row  md:align-center  gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1aLLC6eeCE27seZS7uUGr7bXT13kdzfsD/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-control justify-start w-[240px] group hover:scale-105 focus-visible:ring-accent focus-visible:ring-2"
              >
                {/* <LuArrowDownToLine className="mr-2 h-4 w-4" /> */}
                <FiFileText className="mr-2 h-5 w-5" />
                <span>{tCommon("buttons.cvDocuments")}</span>
              </a>

              <Link to="/about">
                <button className="btn justify-start w-[240px]">
                  {tCommon("buttons.learnMore")}
                  <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero