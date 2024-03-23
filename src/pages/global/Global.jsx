import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Global() {
  return (
    <section className="app ">
      <Topbar />
      <Sidebar />
    </section>
  );
}
