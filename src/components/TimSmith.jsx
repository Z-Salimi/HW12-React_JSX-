import { clientArray } from "./Clients";

export function TimSmith() {
const Array =clientArray.slice(0,clientArray.length-1)
  return (
    <section className="flex justify-center items-center px-[250px] mb-10 mt-20 h-[350px] bg-silver">
      <div className="w-[40%]">
        <img src="../src/assets/image 9.svg" alt="" className="w-[226px] h-[226px]" />
      </div>
      <div className="flex flex-col justify-center gap-y-5 w-[100%]">
        <p className="text-app_header text-[11.14px] font-medium">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <h2 className="text-Brand/Primary text-[13.92px] font-semibold">
          Tim Smith
        </h2>

        <p className="text-app-gray text-[11.14px] font-normal">
          British Dragon Boat Racing Association
        </p>

        <div className="flex gap-x-14 items-center mt-5 ">
        {Array.map((client) => (
          <img key={client} src={client}></img>
        ))}
          <h4 className="flex justify-center items-center gap-3 text-Brand/Primary text-[13.92px] font-semibold">
            Meet all customers 
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7141 11.4094L14.0062 9.11729C14.2781 8.84546 14.2781 8.40473 14.0062 8.1329L11.7141 5.84082M13.8023 8.6251L4.05737 8.6251"
                stroke="#4CAF4F"
                stroke-width="1.0441"
                stroke-linecap="round"
              />
            </svg>
          </h4>
        </div>
      </div>
    </section>
  );
}
