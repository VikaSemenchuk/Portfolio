// import { useTranslation } from "react-i18next";
import PdfIcon from "../../icons/PdfIcon";
// import { Mail } from "lucide-react";

const DocumentsAndEmail = () => {
    // const { t } = useTranslation();
    return (
      <div className="flex gap-6">
        {/* <a
          href="mailto:viktoriia.semenchuk.dev@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2 items-center"
        >
          <Mail />
          <span>viktoriia.semenchuk.dev@gmail.com</span>
        </a> */}
        <a
          href="https://drive.google.com/file/d/1aLLC6eeCE27seZS7uUGr7bXT13kdzfsD/view?usp=drive_link"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2 items-center"
        >
          <PdfIcon />
          {/* <span>{t("documents")}</span> */}
        </a>
        
      </div>
    );
}

export default DocumentsAndEmail;