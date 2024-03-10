import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-5 justify-between items-start px-10 pt-5 pb-2.5 text-xs text-orange-400">
        <div className="flex gap-0 mt-5 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc3ad3a5eedc7cb996be8abbd903a709d2fbf1f40fd035a359be880a4b6b057?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="shrink-0 aspect-[1.03] w-[31px]"
          />
          <div className="grow my-auto">Gasoline</div>
        </div>
        <div className="flex-auto text-xl text-white">Light Duty Truck</div>
        <div className="flex gap-3 self-end mt-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a186a73fe66aa4bcd6afdbd8bf63d876a23d38f31ec50df9f7adcd814b99b30a?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="shrink-0 aspect-[1.47] fill-orange-400 fill-opacity-80 w-[25px]"
          />
          <div>6000 lbs</div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1afc4868981b33bfd4cad18a4fd14a769d10a84283c8c8697c53548cffd3fe?apiKey=5b7f28985d5046dc8b342868bdab707b&"
        className="self-end mt-6 mr-10 max-w-full aspect-[1.06] w-[100px]"
      />
      <div className="flex z-10 flex-col items-start pl-11 mt-0 w-full text-sm text-black">
        <div className="flex flex-col">
          <div className="whitespace-nowrap">TRUCK NO. ----XX</div>
          <div className="mt-5">#Truck ID</div>
        </div>
        <div className="flex z-10 flex-col mt-32 max-w-full w-[126px]">
          <div className="justify-center px-9 py-2 text-base text-white whitespace-nowrap bg-red-600 rounded-[45px]">
            Stop
          </div>
          <div className="mt-16 whitespace-nowrap">TRUCK NO. ----XX</div>
          <div className="mt-5">#Truck ID</div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c00f963d9e133c14f1f7980d359727588bc329887fd9d5301542b50541b48c6?apiKey=5b7f28985d5046dc8b342868bdab707b&"
          className="self-end mt-0 max-w-full aspect-[1.67] w-[167px]"
        />
      </div>
      <div className="flex flex-col px-7 pt-14 pb-7 mt-1.5 w-full bg-sky-900 rounded-[45px]">
        <div className="flex gap-5 justify-between text-sm text-white">
          <div className="flex-auto">DATE OF DISPATCH </div>
          <div className="flex-auto">DATE OF DELIVERY </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-start self-center px-16 mt-2.5 border border-white border-solid aspect-[26.14] fill-zinc-300 fill-opacity-0 stroke-[0.5px] stroke-white w-[366px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc5545803241640d1fa0cbc4a6c1d5adf1e7213b06b30b2f268528960cacaef?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a458bf61dc0e1168a9029ce78d015eefea2d4f47b15c71cc79f0873a97fb88f?apiKey=5b7f28985d5046dc8b342868bdab707b&"
            className="ml-9 aspect-[1.08] w-[15px]"
          />
        </div>
        <div className="shrink-0 mt-3.5 bg-white border border-white border-solid h-[3px]" />
        <div className="mt-3 text-sm text-white">DRIVER ID :</div>
        <div className="shrink-0 mt-4 bg-white border border-white border-solid h-[3px]" />
        <div className="mt-2.5 text-sm text-white">PICK-UP LOCATION :</div>
        <div className="mt-8 text-sm text-white">DROP-OFF LOCATION :</div>
        <div className="self-center mt-7 text-sm text-white whitespace-nowrap">
          SELECT ROUTE :
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b50f3ba998bac00a5fab32aa060d040359b7449af019ca35e62b639739294b46?apiKey=5b7f28985d5046dc8b342868bdab707b&"
          className="self-center mt-3 max-w-full aspect-[1.75] w-[216px]"
        />
        <div className="justify-center items-center px-16 py-5 mt-2.5 text-xl font-bold text-black rounded-[45px]">
          ASSIGN TRIP
        </div>
      </div>
    </div>
  );
}