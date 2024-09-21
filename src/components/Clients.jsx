export const clientArray = [
  "./src/assets/clients/Logo1.svg",
  "./src/assets/clients/Logo2.svg",
  "./src/assets/clients/Logo3.svg",
  "./src/assets/clients/Logo4.svg",
  "./src/assets/clients/Logo5.svg",
  "./src/assets/clients/Logo6.svg",
  "./src/assets/clients/Logo7.svg",
];


export function Clients() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 p-10 w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-D_Grey font-medium text-[25px]">Our Clients</h3>
        <p className="text-D_Grey font-normal text-[12px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex justify-around items-center mt-8 w-full">
        {clientArray.map((client, index) => (
          <img key={index} src={client}></img>
        ))}
      </div>
    </section>
  );
}
