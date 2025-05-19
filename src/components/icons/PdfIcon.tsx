const PdfIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PDF icon"
        role="img"
        // className=" hover:text-red-600"
        {...props}
      >
        <rect
          x="2"
          y="4"
          width="100"
          height="90"
          rx="13"
          fill="red"
          // stroke="#eadede"
          stroke="currentColor"
          strokeWidth="9"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="40"
          fontWeight="bold"
          fill="#eadede"
          fontFamily="Arial, sans-serif"
        >
          PDF
        </text>
      </svg>
    );
}

export default PdfIcon
