import { useTranslation } from "react-i18next";
const HomePage = () => {
  const {t} = useTranslation()
    return (
      <div className="">
        <h1>{t('home-page')}</h1>
      </div>
    );

}

export default HomePage;