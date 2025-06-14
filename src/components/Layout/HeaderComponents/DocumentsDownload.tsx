import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";

const DocumentsDownload = () => {
  const { t: tCommon } = useTranslation('common')

  return (
    <>

      <a
        href="https://drive.google.com/file/d/1hhTvgPK6XKlWFJprM-Vsiuwfd5icxYla/view?usp=drive_link"
        target="_blank"
        rel="noreferrer noopener"
        className="btn-control justify-start w-[240px] group hover:scale-105 focus-visible:ring-accent focus-visible:ring-2"
      >
        {/* <ArrowDownToLine className="mr-2 h-4 w-4" /> */}
        <FileText className="mr-2 h-5 w-5" />
        <span>{tCommon("buttons.cvDocuments")}</span>
      </a>

    </>
  );
}

export default DocumentsDownload;