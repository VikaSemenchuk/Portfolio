// import { useTranslation } from "react-i18next";
import PdfIcon from "../../icons/PdfIcon";

const DocumentsAndEmail = () => {
    return (
      <div className="flex gap-6">
      
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