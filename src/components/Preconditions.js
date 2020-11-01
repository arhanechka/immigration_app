import React, { useState } from 'react'
import Select from "./Select";
import { Link } from 'react-router-dom';

const ages = [
  { value: "18 - 25", label: "18 - 25" },
  { value: "25 - 35", label: "25 - 35" },
  { value: "30 - 40", label: "30 - 40" },
  { value: "40 - 50", label: "40 - 50" },
  { value: "50 +", label: "50 +" }
];


const professions = [
  { value: "Information technologies", label: "Information technologies" },
  { value: "Labour", label: "Labour" },
  { value: "Service", label: "Service" },
  { value: "Medicine", label: "Medicine" },
  { value: "Education", label: "Education" }
];


function Preconditions() {
  const [age, setAge] = useState(ages[0].value);
  const [profession, setProfession] = useState(professions[0].value);

  const handleAge = (selectedOption) => {
    let age = selectedOption.value;
    setAge(age)
    console.log(age)
  }

  const handleProfession = (selectedOption) => {
    let profession = selectedOption.value;
    setProfession(profession)
    console.log(profession)
  }

  const handleSubmit = () => {
    alert(age + " " + profession )
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="block">Preconditions</div>
        <div class="block">
          <Select label="Ages" options={ages} handleChange={handleAge} />
        </div>
        <div class="block">
          <Select label="Professions" options={professions} handleChange={handleProfession} />
        </div>
        <Link to="/cond"><input class='select' type="submit" value="Next"/></Link>
      </form>
    </div>
  );
}

export default Preconditions