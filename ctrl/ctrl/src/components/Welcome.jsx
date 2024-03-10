import * as React from "react";

function Welcome() {
  return (
    <div className="flex flex-col items-center pb-20 mx-auto w-full text-center text-sky-50 max-w-[480px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cf2ad664f01a8aebb59ef7fee47da1af72f52ecc180c4104e84b17a2a691b5a?apiKey=5b7f28985d5046dc8b342868bdab707b&"
        className="self-stretch w-full aspect-[8.33]"
      />
      <div className="mt-72 text-4xl">app-name</div>
      <div className="mt-96 text-base">by CtrlFreaks</div>
    </div>
  );
}
export default Welcome