"use client";

import Link from "next/link";

const Footer = function () {
  const handleAnchorClick = (event: any) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    console.log(targetId);
    const targetAnchor = document.querySelector(targetId);
    console.log(targetAnchor);
    if (!targetAnchor) return;
    const targetTop = targetAnchor.getBoundingClientRect().top;
    const offset = 100; // Adjust this offset as needed

    // Calculate the originalTop position
    const originalTop = targetTop + window.scrollY - offset;

    window.scroll({
      top: originalTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-8 px-4 flex-col sm:flex-row gap-4 relative mt-16 border flex items-center justify-between">
      <p>
        Built by{" "}
        <Link
          className="text-primary1 font-semibold "
          href={"https://twitter.com/strmziai"}
        >
          {" "}
          @strmzi.ai{" "}
        </Link>
        on Twitter
      </p>{" "}
      <ul className="list-none flex items-center">
        <a
          href="#pricing"
          onClick={handleAnchorClick}
          className="border-r px-2"
        >
          Pricing
        </a>
        <a
          href="#features"
          onClick={handleAnchorClick}
          className="border-r px-2"
        >
          Features
        </a>
        <p className="px-2">Collection</p>
      </ul>
    </div>
  );
};

export default Footer;
