const PdfIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="26"
        height="24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PDF icon"
        role="img"
        className=" hover:bg-shadow-2xl	"
        {...props}
      >
        <rect
          x="2"
          y="4"
          width="100"
          height="90"
          rx="13"
          fill="red"
          stroke="currentColor"
          strokeWidth="6"
        />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="38"
          fontWeight="bold"
          fill="currentColor"
        >
          PDF
        </text>
      </svg>
    );
}

export default PdfIcon
