"use client";
import Live from "../components/Live";
// import "dotenv/config";
export default function Page() {
  require("dotenv").config();
  console.log(process.env);
  return (
    <div className="">
      <Live />
    </div>
  );
}
