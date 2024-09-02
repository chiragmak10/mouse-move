"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  // const preventSleep = () => {
  //   setInterval(() => {
  //     console.log("Trigger");
  //     window.dispatchEvent(new MouseEvent("mousemove"));
  //   }, 5000);
  // };
  const [enableLockState, setEnableLockState] = useState(false);
  const enableLock = async () => {
    let wakeLock = null;

    // create an async function to request a wake lock
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Wake Lock is active!");
      setEnableLockState(true);
    } catch (err) {
      // The Wake Lock request has failed - usually system related, such as battery.
      console.log(err);
      setEnableLockState(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video width="320" height="240" controls autoplay loop muted>
        <source
          src="https://videos.pexels.com/video-files/7949702/7949702-uhd_1440_2560_24fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/7949702/7949702-uhd_1440_2560_24fps.mp4"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
