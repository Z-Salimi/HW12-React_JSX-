import { MarketingCard } from "./MarketingCard";

export function Marketing() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2 mb-28">
      <div className="flex flex-col justify-center items-center gap-6 w-[30%] mb-3">
        <h2 className="text-D_Grey text-[25.06px] font-semibold">
          Caring is the new marketing
        </h2>
        <p className="text-app_header text-[11.14px] font-normal text-center">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      <div className="flex justify-center items-center gap-x-5">
        <MarketingCard src={"../src/assets/marketing/image 18.svg"} text={"Creating Streamlined Safeguarding Processes with OneRen"} />
        <MarketingCard src={"../src/assets/marketing/image 19.svg"} text={"What are your safeguarding responsibilities and how can you manage them?"} />
        <MarketingCard src={"../src/assets/marketing/image 20.svg"} text={"Revamping the Membership Model with Triathlon Australia"} />
      </div>
    </section>
  );
}
