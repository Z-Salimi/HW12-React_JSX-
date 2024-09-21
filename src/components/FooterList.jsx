export function FooterList({ title, text1, text2, text3, text4, text5 }) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h4 className=" font-semibold text-[13.92px] text-white">{title}</h4>
      <ul className="flex flex-col justify-center gap-2">
        <li className="text-[9.74px] text-silver font-normal">{text1}</li>
        <li className="text-[9.74px] text-silver font-normal">{text2}</li>
        <li className="text-[9.74px] text-silver font-normal">{text3}</li>
        <li className="text-[9.74px] text-silver font-normal">{text4}</li>
        <li className="text-[9.74px] text-silver font-normal">{text5}</li>
      </ul>
    </div>
  );
}
