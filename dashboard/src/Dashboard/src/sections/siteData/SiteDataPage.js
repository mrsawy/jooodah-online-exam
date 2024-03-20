import React, { useState } from "react";
import { useSelector } from "react-redux";
import Instructions from "./Instructions";
import Spinner from "../../../../components/Spinner/index";
import InstructionsAR from "./Instructions-ar";

export default function BasicDemo() {
  const { isLoading } = useSelector((s) => s.site);
  if (isLoading) return <Spinner />;
  return (
    <div>
      <Instructions />
      <hr className="  my-40" />
      <InstructionsAR />
    </div>
  );
}
