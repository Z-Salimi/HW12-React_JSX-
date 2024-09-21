export function CommunityCard({src , title , text}) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-1/4 py-14 px-24 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_10px]">
      <img
        src={src}
        alt=""
        className="w-[45.24px] h-[38.98px]"
      />
      <h4 className="font-bold text-D_Grey text-[19.49px] text-center">
        {title}
      </h4>
      <p className="font-normal text-[9.74px] text-D_Grey text-center">
        {text}
      </p>
    </div>
  );
}
