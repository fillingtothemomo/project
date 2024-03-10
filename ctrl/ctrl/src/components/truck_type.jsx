import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col px-7 mt-2.5 w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2ec4aec576e8fcb1113c9b4274b559afac033c20bc3be8b2a1dcd5a55f37de8?apiKey=5b7f28985d5046dc8b342868bdab707b&"
        className="w-8 h-8 rounded-full border border-solid shadow-sm aspect-[1.03] bg-[linear-gradient(180deg,#0E2535_0%,#18374D_52%,#6F98B4_100%)] border-neutral-400 stroke-[1px]"
      />
      <div className="mt-6 text-2xl tracking-tight text-teal-950">
        Choose your truck type!
      </div>
      <div className="flex flex-col justify-center px-2 pt-5 mt-10 w-full text-orange-400 rounded-3xl bg-sky-950">
        <div className="text-base">Light Duty Truck</div>
        <div className="flex gap-5 justify-between items-start mt-4 text-xs">
          <div className="flex flex-col">
            <div className="flex gap-1 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0293c02080302628b97a11128febf2d953ee0e47c8187f1ad10120617fae8410?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                className="shrink-0 aspect-square w-[19px]"
              />
              <div className="grow my-auto">Gasoline</div>
            </div>
            <div className="flex gap-1.5 mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb738d3b88ba6cb378400700ee3753e4a0d8a0226666719d5451f8b0887d0a21?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                className="shrink-0 w-3.5 aspect-square"
              />
              <div className="my-auto">6000 lbs</div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da7496ba36a980003c49786998b4de907501dac6825e4add8bda21a7fabbd736?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="shrink-0 mt-1 max-w-full aspect-[1.2] w-[197px]"
          />
        </div>
      </div>
      <div className="flex flex-col pt-5 pl-2 mt-6 w-full bg-amber-100 rounded-3xl text-teal-950">
        <div className="text-base">Medium Duty Truck</div>
        <div className="flex gap-4 items-start mt-4 text-xs whitespace-nowrap">
          <div className="flex flex-col basis-0">
            <div className="flex gap-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f7ec6bbfd129960d89d20ee800e4d3a138ecb545d6805b55eabf2a7da13d43?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                className="shrink-0 aspect-square w-[19px]"
              />
              <div className="grow my-auto">Gasoline</div>
            </div>
            <div className="flex gap-1.5 mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/194b6b11e5220b0ddbffdda860b17bb59c0c06ac53e0f0111b17af1aa09dc3e7?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                className="shrink-0 w-3.5 aspect-square"
              />
              <div className="grow">6001-26,000 lbs</div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4960c6e4cd161394a8c3b25a86cae617a454e92f856a5e3513fb74a33e64c97?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="flex-1 mt-3.5 w-full aspect-[1.49]"
          />
        </div>
      </div>
      <div className="flex flex-col pt-5 mt-6 bg-teal-100 rounded-3xl">
        <div className="flex flex-col pl-2 text-teal-950">
          <div className="text-base">Heavy Duty Truck</div>
          <div className="flex gap-5 justify-between items-start px-px mt-4 text-xs whitespace-nowrap">
            <div className="flex flex-col basis-0">
              <div className="flex gap-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c32dfa79fe9c6997c78a8d9bf5d77aa830cfcc3785f9fe53304548bedfd278f2?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                  className="shrink-0 aspect-square w-[19px]"
                />
                <div className="grow my-auto">Gasoline</div>
              </div>
              <div className="flex gap-1.5 mt-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3884d4ba7b46dd27e4e98ce517bf399a99d5f31267849c37928a839ddbf50485?apiKey=5b7f28985d5046dc8b342868bdab707b&"
                  className="shrink-0 w-3.5 aspect-square"
                />
                <div className="grow">&gt;26,000 lbs</div>
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d426eeb7525e9725ff4cff51bb2fa3f1d2205d766660fac37e000feee001c4bd?apiKey=5b7f28985d5046dc8b342868bdab707b&"
              className="flex-1 mt-3 w-full aspect-[1.47]"
            />
          </div>
        </div>
        <div className="z-10 justify-center items-center px-16 py-4 -mt-8 mb-0 text-base font-semibold text-center text-white whitespace-nowrap rounded-[100px]">
          Next
        </div>
      </div>
      <div className="shrink-0 self-center mt-6 bg-black h-[5px] rounded-[100px] w-[134px]" />
    </div>
  );
}
