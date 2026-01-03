import React from "react";
const Border = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="animate-rotate-border w-full max-w-sm cursor-pointer rounded-lg bg-conic/[from_var(--border-angle)] from-black from-80% via-sky-500 via-90% to-black to-100% p-px duration-200 hover:scale-[1.02] hover:transform">
        <div className="rounded-lg bg-neutral-900 p-10 text-center text-xs text-white">
          hello world
        </div>
      </div>
    </div>
  );
};
export default Border;