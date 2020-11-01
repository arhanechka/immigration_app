import React, { useState } from 'react'
import Select from "./Select";

const climates = [
  { value: "cold", label: "cold" },
  { value: "warm", label: "warm" },
  { value: "hot", label: "hot" },
  { value: "no difference", label: "no difference" }
];


const world_parts = [
  { value: "Europe", label: "Europe" },
  { value: "North America", label: "North America" },
  { value: "South America", label: "South America" },
  { value: "Australia", label: "Australia" },
  { value: "no difference", label: "no difference" }
];


function Conditions() {
  const [climate, setClimate] = useState(climates[0].value);
  const [part, setPart] = useState(world_parts[0].value);

  const handleClimate = (selectedOption) => {
    let climate = selectedOption.value;
    setClimate(climate)
    console.log(climate)
  }

  const handleWorldPart = (selectedOption) => {
    let part = selectedOption.value;
    setPart(part)
    console.log(part)
  }

  const handleSubmit = () => {
    alert(climate + " " + part )
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="block">Conditions</div>
        <div class="block">
          <Select label="Climate" options={climates} handleChange={handleClimate} />
        </div>
        <div class="block">
          <Select label="World part" options={world_parts} handleChange={handleWorldPart} />
        </div>
        <input class='select' type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Conditions