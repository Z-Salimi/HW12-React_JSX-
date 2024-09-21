import { HelpingCard } from "./HelpingCard";

export function Helping() {
  return (
    <section className="flex justify-between items-center h-[250px] px-[200px] my-28 bg-silver">
      <div className="flex flex-col justify-center gap-5 ml-28">
        <h2 className="text-[25.06px] text-D_Grey font-semibold">
          Helping a local{" "}
          <span className="text-Brand/Primary block">
            business reinvent itself
          </span>
        </h2>
        <p className="text-[11.14px] text-semi_black font-normal">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-8 mr-16">
        <HelpingCard
          src={"../src/assets/helping/Icon1.svg"}
          number={"2,245,341"}
          text={"Members"}
        />
        <HelpingCard
          src={"../src/assets/helping/Group 22.png"}
          number={"46,328"}
          text={"Clubs"}
        />
        <HelpingCard
          src={"../src/assets/helping/Icon3.svg"}
          number={"828,867"}
          text={"Event Bookings"}
        />
        <HelpingCard
          src={"../src/assets/helping/Icon4.svg"}
          number={"1,926,436"}
          text={"Payments"}
        />
      </div>
    </section>
  );
}
