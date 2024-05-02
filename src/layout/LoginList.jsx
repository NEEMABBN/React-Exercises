import InputBox from "./InputBox";

export default function LoginList() {
  return (
    <div className="w-72 flex flex-col items-center my-10 gap-8 background py-[20px] rounded-[30px]">
      <h1 className="text-[30px] font-extrabold text-[#E05B7E]">LOGIN FORM</h1>
      <InputBox />
      <button className="text-[20px] font-bold py-[10px] px-[50px] rounded-[30px] bg-[#E05B7E] text-white">
        SING IN
      </button>
      <span className="text-[15px] font-semibold text-[#E05B7E] cursor-pointer">
        FORGET PASSWORD ?
      </span>
    </div>
  );
}
