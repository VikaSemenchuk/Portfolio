import { useTranslation } from "react-i18next";

const ProjectPage = () => {
      const {t} = useTranslation()
    
    return (
      <>
        <h1>{t("projects-page")}</h1>
      </>
    );

}

export default ProjectPage;