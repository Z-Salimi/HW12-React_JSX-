export function MarketingCard({src ,  text}) {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img src={src} alt="" />
      <div className="bg-silver rounded-md w-[220px] h-[123px] p-4 flex flex-col justify-center items-center gap-5 absolute -bottom-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <p className="text-[13.92px] text-app_header font-semibold text-center">
          {text}
        </p>
        <h4 className="flex justify-center items-center gap-1 text-Brand/Primary text-[13.92px] font-semibold">
          Readmore
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7141 11.4094L14.0062 9.11729C14.2781 8.84546 14.2781 8.40473 14.0062 8.1329L11.7141 5.84082M13.8023 8.6251L4.05737 8.6251"
              stroke="#4CAF4F"
              stroke-width="1.0441"
              stroke-linecap="round"
            />
          </svg>
        </h4>
      </div>
    </div>
  );
}
