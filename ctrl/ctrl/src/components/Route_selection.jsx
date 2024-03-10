import * as React from "react";

function routeSelection() {
  return (
    <div className="flex flex-col items-center pb-8 mx-auto w-full text-lg font-medium leading-6 text-center max-w-[480px] text-white text-opacity-50">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6306889429a45d374d4336252ca1ad10b562e4cadb17a8eef63cfb73ca285760?apiKey=5b7f28985d5046dc8b342868bdab707b&"
        className="self-stretch w-full aspect-[8.33]"
      />
      <div className="mt-11 text-xl tracking-tight text-sky-50 w-[241px]">
        Where are you going today?
      </div>
      <div className="flex gap-5 mt-8 w-full tracking-tight whitespace-nowrap max-w-[338px]">
        <div className="shrink-0 my-auto w-4 h-4 rounded-full border-2 border-white border-solid bg-sky-950 stroke-[1.5px]" />
        <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 rounded-3xl shadow-sm bg-white bg-opacity-10 w-fit">
          Your current Location
          <span className="text-white tracking-[21.59px]">n</span>
        </div>
      </div>
      <div className="flex gap-3.5 mt-5 w-full tracking-wide whitespace-nowrap leading-[129%] max-w-[346px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2f498d8ccd5bbe02a40ff39225dcf5e2140464cb2aa39bfeca4c43ac3c1683?apiKey=5b7f28985d5046dc8b342868bdab707b&"
          className="shrink-0 my-auto w-7 aspect-square"
        />
        <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 rounded-3xl shadow-sm bg-white bg-opacity-10 w-fit">
          Work
        </div>
      </div>
      <div className="justify-center items-center px-16 py-4 w-full text-base font-semibold text-white whitespace-nowrap max-w-[343px] mt-[497px] rounded-[100px]">
        Let’s Go!
      </div>
    </div>
  );
}
