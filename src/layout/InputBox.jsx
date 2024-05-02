import { useState } from "react";

export default function InputBox() {
  const [nameInput, setnameInput] = useState("");
  const [emialInput, setemailInput] = useState("");
  const [passInput, setpassInput] = useState("");

  return (
    <div className="flex flex-col items-center gap-8">
      <input
        onChange={(e) => setnameInput(e.target.value)}
        value={nameInput}
        type="text"
        placeholder="USERNAME"
        className="bg-inherit text-[20px] font-medium border-b-[3px] border-solid border-[#E05B7E] text-[#E05B7E]"
      />
      <input
        onChange={(e) => setemailInput(e.target.value)}
        value={emialInput}
        type="email"
        placeholder="EMAIL"
        className="bg-inherit text-[20px] font-medium border-b-[3px] border-solid border-[#E05B7E] text-[#E05B7E]"
      />
      <input
        onChange={(e) => setpassInput(e.target.value)}
        value={passInput}
        type="password"
        placeholder="PASSWORD"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        maxLength={8}
        className="bg-inherit text-[20px] font-medium border-b-[3px] border-solid border-[#E05B7E] text-[#E05B7E]"
      />
    </div>
  );
}
