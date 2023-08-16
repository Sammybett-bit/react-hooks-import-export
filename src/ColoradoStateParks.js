import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
console.log(trees);
wildlife();
export const trees = "Aspen and Pine";
export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}
function elevation() {
  console.log("9583 ft");
}