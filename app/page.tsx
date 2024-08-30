"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const preventSleep = () => {
    setInterval(() => {
      console.log("Trigger");
      window.dispatchEvent(new MouseEvent("mousemove"));
    }, 5000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={preventSleep}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Trigger
      </button>
    </main>
  );
}
