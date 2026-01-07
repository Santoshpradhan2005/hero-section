import React from "react";
// import Hero from "./Hero";
// import Border from "./Bordergradient";
import NavBar from "./NavBar";
import Badgee from "./badgee";

const App = () => {
  return (
    <div className="to-transform relative h-screen bg-blue-100 bg-radial-[at_47%_10%] from-white to-95%">
      {/* <div className=" h-screen w-full bg-radial-[at_47%_10%] from-white to-transform to-95%">
</div> */}

      <div className="absolute inset-0 mx-auto h-full w-full max-w-7xl px-4 md:py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-400 via-neutral-200 to-transparent shadow-2xl"></div>

        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-400 via-neutral-200 to-transparent">


          
        </div>
        <NavBar />
        <Badgee />
        {/* *<Hero />
      <Border/>
       */}

      </div>
    </div>
  );
};

export default App;

// className="flex h-screen justify-center bg-neutral-900
