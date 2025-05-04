import PdfIcon from "../../icons/PdfIcon";
import { Mail } from "lucide-react";

const DocumentsAndEmail = () => {
    return (
      <div className="flex gap-6 items-center">
        <a
          href="https://drive.google.com/file/d/1aLLC6eeCE27seZS7uUGr7bXT13kdzfsD/view?usp=drive_link"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2 items-center"
        >
          <PdfIcon />
          <span>Documents</span>
        </a>
        <a
          href="mailto:viktoriia.semenchuk.dev@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2 items-center"
        >
          <Mail />
          <span>viktoriia.semenchuk.dev@gmail.com</span>
        </a>
      </div>
    );
}

export default DocumentsAndEmail;