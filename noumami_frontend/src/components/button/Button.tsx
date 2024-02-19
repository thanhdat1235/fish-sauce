import React from "react";

export type ButtonProps = {
  title: string;
  borderColor: string;
  bgColor: string;
};

const Button = ({ dataCreateBtn }: { dataCreateBtn: ButtonProps }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <button
          className={`px-5 py-3 bg-[${dataCreateBtn.bgColor}] !border border-[${dataCreateBtn.borderColor}] rounded-md uppercase text-black font-semibold text-sm`}
        >
          {dataCreateBtn.title}
        </button>
      </div>
    </>
  );
};

export default Button;
