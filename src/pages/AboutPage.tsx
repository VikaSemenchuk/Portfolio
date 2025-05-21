// import Hero from "../components/Hero"

import { useTranslation } from "react-i18next";
import  ProjectSlider  from "../components/ProjectSlider";

const AboutPage = () => {
 const { t } = useTranslation();

   const techSkills = t('about-page.skills.technical', { returnObjects: true }) as string[];
  const softSkills = t('about-page.skills.soft', { returnObjects: true }) as string[];
  const languages = t('about-page.skills.languages', { returnObjects: true }) as string[];
  const education = t('about-page.education', { returnObjects: true }) as {
    program: string;
    institution: string;
    dates: string;
  }[];

  return (
    <div>
      <section className="section">
        <div className="container flex flex-col items-center gap-6">

          <h1>Viktoriia Semenchuk</h1>
          <h2 className="text-xl text-accent font-medium">{t("hero.title")}</h2>
          <p className="max-w-3xl text-xl">{t("about-page.intro")}</p>
        </div>
      </section>

      <ProjectSlider />

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              🔧 {t("about-page.skills.tech-skills-title")}
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-8">
              {techSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              🤝 {t("about-page.skills.soft-skills-title")}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {softSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              🌍 {t("about-page.skills.languages-title")}
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-8">
              {languages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              🎓 {t("about-page.education-title")}
            </h3>
            <ul className="space-y-4">
              {education.map((edu, idx) => (
                <li key={idx}>
                  <p className="font-bold">{edu.program}</p>
                  <p className="text-base text-muted-foreground">
                    {edu.institution} — {edu.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;