import React, { useContext } from "react";
import { Context } from "../Context";

export default function Photos() {
  const { photos } = useContext(Context);
  console.log(photos);
  return (
    <main className="photos">
      <h2>Photos</h2>
    </main>
  );
}
