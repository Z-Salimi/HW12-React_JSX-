import { FooterIcon } from "./FooterIcon";
import { FooterList } from "./FooterList";

export function Footer() {
  return (
    <section className="flex justify-around items-center px-24 bg-app-black h-[260px]">
      <div className="flex flex-col justify-center gap-8 mr-20">

        <img src="../src/assets/footer/Logo.svg" alt="" />

        <div className="flex flex-col justify-center gap-3">
          <p className="text-[9.74px] font-normal text-silver">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-[9.74px] font-normal text-silver">
            All rights reserved
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <FooterIcon src={"../src/assets/footer/Social Icons1.svg"}/>
          <FooterIcon src={"../src/assets/footer/Social Icons2.svg"}/>
          <FooterIcon src={"../src/assets/footer/Social Icons3.svg"}/>
          <FooterIcon src={"../src/assets/footer/Social Icons4.svg"}/>
        </div>
      </div>
      
        <div className="flex justify-around items-start gap-20">
            <FooterList title={"Compony"} text1={"About us"} text2={"Blog"} text3={"Contact us"} text4={"Pricing"} text5={"Testimonials"}/>
            <FooterList title={"Support"} text1={"Help center"} text2={"Terms of service"} text3={"Legal"} text4={"Privacy policy"} text5={"Status"}/>
            <div className="flex flex-col justify-center gap-6">
            <h4 className=" font-semibold text-[13.92px] text-white">Stay up to date</h4>
            <input type="email" placeholder="Your email address" className="text-[9px] px-3 w-[177.5px] h-[27.84px] rounded-[5.57px] bg-gray-700 bg-app-send bg-no-repeat bg-right-10" />
            </div>
        </div>
      
    </section>
  );
}
