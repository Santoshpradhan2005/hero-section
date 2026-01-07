import React from "react";
import finta from "/src/assets/finta.svg";

const NavBar = () => {
  const Links = [
    { title: "Links", href: "/links" },
    { title: "Guide", href: "/guide" },
    { title: "Pricing", href: "/pricing" },
    { title: "Login", href: "/login" },
  ];

  return (


    <div className="flex items-center justify-between px-4 py-4 ">
      <img
        draggable={"false"}
        loading="Lazy"
        src={finta}
        alt={finta}
        height={50}
        width={50}
      />

      <ul className="flex gap-8">
        {Links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-sm font-medium text-neutral-800 transition duration-300 hover:text-neutral-500"
            >
              {link.title}
            </a>
          </li>
        ))}
        <button className="rounded-lg bg-[#2579f4] px-4 py-1.5 font-bold tracking-wide text-white shadow-lg text-shadow-md">
          Start free trial
        </button>
      </ul>
    </div>

  );
};

export default NavBar;
