import React, { useState } from "react";
import { useSelector } from "react-redux";
import Instructions from "./Instructions";
import Spinner from "../../../../components/Spinner/index";

export default function BasicDemo() {
  const { isLoading } = useSelector((s) => s.site);
  if (isLoading) return <Spinner  />;
  return (
    <div>
      <Instructions />
    </div>
  );
}
