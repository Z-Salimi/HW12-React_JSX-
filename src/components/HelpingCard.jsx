export function HelpingCard({src , number , text}){
    return(
        <div className="flex justify-center items-center gap-3 w-full">
          <div className="w-[40%]">
            <img src={src} alt=""/>
          </div>
          <div className="flex flex-col justify-center w-[80%]">
            <h4 className="text-[19.49px] text-D_Grey font-bold">{number}</h4>
            <p className="text-[11.14px] text-D_Grey font-normal">{text}</p>
          </div>
        </div>
    )
}