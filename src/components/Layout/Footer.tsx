import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t: tNavigation } = useTranslation('navigation');
  
  return (
    <footer>
      <div className="container">
        <p>{tNavigation("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;