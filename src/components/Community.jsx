import { CommunityCard } from "./CommunityCard";

export function Community() {
  return (
    <section className="flex flex-col gap-10 my-14 px-10">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-D_Grey text-[25px] font-semibold text-center">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-app_header text-[11px] font-normal">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex justify-around items-center gap-10 mt-5">
        <CommunityCard
          src={"../src/assets/community/Icon1.svg"}
          title={"Membership Organisations"}
          text={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <CommunityCard
          src={"../src/assets/community/Icon2.svg"}
          title={"National Associations"}
          text={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <CommunityCard
          src={"../src/assets/community/Icon3.svg"}
          title={"Clubs And Groups"}
          text={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
      </div>
    </section>
  );
}
