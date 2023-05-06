import React from "react";
import usStates from "../data/states.json";

export function StateDropdown() {
  return (
    <>
      {usStates.map((state) => {
        return <option key={state.id}>{state.name}</option>;
      })}
    </>
  );
}
