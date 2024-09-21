import { Buttons } from "./buttons";

export function Unseen() {
  return (
    <section className="grid grid-cols-2 justify-center px-[250px] mb-10 mt-32">
      <div className="">
        <img src="../src/assets/rafiki.svg" alt="" />
      </div>
      <div className="">
        <h2 className="text-D_Grey text-[25.06px] font-semibold mb-5 w-[70%]">The unseen of spending three years at Pixelgrade</h2>
        <p className="text-app_header text-[9.74px] font-normal mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Buttons color="bg-Brand/Primary" text="Learn More" />
      </div>
    </section>
  );
}
