import React from "react";

export default function TreatmentSheet({ children }) {
  return (
    <>
      <ul>
        <li>기획안</li>
        <li>스토리</li>
        <li>인물</li>
      </ul>
      <div>{children}</div>
    </>
  );
}

//리스트 클릭하면 paper 나와야 됨
