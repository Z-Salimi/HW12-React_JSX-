import { Buttons } from "./buttons";

export function Design() {
  return (
    <section className="grid grid-cols-2 justify-center items-center px-[250px] mb-10 mt-32">
      <div>
        <img src="../src/assets/pana.svg" alt="" />
      </div>
      <div>
        <h2 className="text-D_Grey text-[25.06px] font-semibold mb-5 w-[88%]">
          How to design your site footer like we did
        </h2>
        <p className="text-app_header text-[9.74px] font-normal mb-5">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Buttons color="bg-Brand/Primary" text="Learn More" />
      </div>
    </section>
  );
}
