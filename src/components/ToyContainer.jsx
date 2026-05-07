import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, likeToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} likeToy={likeToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
