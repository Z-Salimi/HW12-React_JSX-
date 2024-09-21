export function Buttons(props) {
  return (
    <button
      className={`${props.color} flex justify-center items-center gap-2  py-[9.74px] px-[22.27px] rounded-[2.78px] text-white font-medium text-[12px]  transition-all ease-linear duration-100 hover:bg-green-700 `}
    >
      {props.text}
      {props.src}
    </button>
  );
}
