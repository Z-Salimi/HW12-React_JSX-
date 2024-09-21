import { Buttons } from "./buttons";
import { rightArrow } from "./Navbar";

export function Demo(){
    return(
        <section className="flex flex-col justify-center items-center gap-5 h-[260px] bg-silver w-full">
            <h1 className="font-semibold text-[44.55px] text-app-black text-center w-[35%]">Pellentesque suscipit fringilla libero eu.</h1>
            <Buttons color="bg-Brand/Primary" text="Get a Demo" src={rightArrow} />
        </section>
    )
}