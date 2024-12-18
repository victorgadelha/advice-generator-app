type CardProps = {
  adviceNumber: number;
  adviceText: string;
  fetchAdvice: () => void;
};

const Card = ({ adviceNumber, adviceText, fetchAdvice }: CardProps) => {
  return (
    <div className="flex justify-center items-center flex-col bg-dark-grayish-blue rounded-2xl max-w-[34rem] text-center relative p-16">
      <span className="text-neon-green tracking-[.3rem] font-semibold">
        ADVICE #{adviceNumber}
      </span>
      <p className="font-manrope text-quote text-light-cyan py-6">
        {adviceText}
      </p>
      <svg
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6 hidden md:block"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <svg
        className="mb-6 block md:hidden"
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <button
        onClick={fetchAdvice}
        className="rounded-full bg-neon-green size-16 flex justify-center items-center absolute top-[91%] "
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
