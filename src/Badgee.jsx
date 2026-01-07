import React from "react";

const Badgee = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center px-4 py-2">
      <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 shadow-sm transition duration-200 hover:bg-slate-200 hover:text-slate-800 hover:transition">
        <span className="h-2 w-2 rounded-full bg-emerald-500/50 blur-[1px]" />
        What are early stage tax requirements?
      </button>

      <div>
        <h1 className="mt-10 text-center text-7xl font-medium tracking-tighter text-black">
          {" "}
          Magically simplify <br />
          accounting and taxes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 2:02pm.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button className="rounded-lg bg-[#2579f4]  px-4 py-1.5 font-bold tracking-wide text-white shadow-lg text-shadow-md cursor-pointer hover:bg-blue-700 transition duration-150">
          Get started
        </button>
        
        <button className="rounded-lg    px-4 py-1.5 font-medium tracking-wide text-black  cursor-pointer hover:bg-gray-300/50 transition duration-300">
          Pricing 
        </button>
      </div>
    </div>
  );
};

export default Badgee;
