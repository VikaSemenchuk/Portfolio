import { useTranslation } from "react-i18next";

import MyPhoto from "../assets/hero-photo.png"
import PdfIcon from "./icons/PdfIcon";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    const { t } = useTranslation()

    return (
      <section className="section">
        <div className="container w-10/12 flex gap-32 gap-4 md:gap-8 lg:gap-16 ">
          <img
            src={MyPhoto}
            alt={t("hero.photoAlt")}
            className=" rounded-full mx-auto  object-cover"
          />
          <div className="flex flex-col gap-4 justify-center align-center">
            <h1>{t("hero.title")}</h1>

            <p className="text-lg text-muted-foreground py-2 px-28 text-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1aLLC6eeCE27seZS7uUGr7bXT13kdzfsD/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="flex gap-2 items-center"
              >
                <PdfIcon />
                <span>{t("documents")}</span>
              </a>

              <Link to="/about">
                <button className="flex gap-0.5 items-center">
                  {t("hero.button-to-about")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero