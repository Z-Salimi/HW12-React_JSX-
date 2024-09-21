import { Buttons } from "./buttons";

export function Hero() {
  return (
    <section className="flex justify-around items-center w-full p-20 bg-silver">
      <div>
        <div className="flex flex-col gap-3 w-[30vw] mb-10 ">
          <h2 className="font-semibold text-[44.55px] text-D_Grey">
            Lessons and insights <span className="text-Brand/Primary">from 8 years</span>
          </h2>
          <p className="text-app_header text-[12px] font-normal">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <div className="mt-2">
        <Buttons color="bg-Brand/Primary" text="Register" />
        </div>
      </div>

      <div>
        <img src="./src/assets/heroImg.png" alt="" className="w-[272px] h-[283px]" />
      </div>
    </section>
  );
}
