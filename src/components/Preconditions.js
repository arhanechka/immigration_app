import React from 'react'
import Select from "./Select";

const ages = [
    { value: "18 - 25", label: "18 - 25"},
    { value: "25 - 35", label: "25 - 35"},
    { value: "30 - 40", label: "30 - 40"},
    { value: "40 - 50", label: "40 - 50"},
    { value: "50 +", label: "50 +"}
  ];

  
  const professions = [
    { value: "Information technologies", label: "Information technologies"},
    { value: "Labour", label: "Labour"},
    { value: "Service", label: "Service"},
    { value: "Medicine", label: "Medicine"},
    { value: "Education", label: "Education"}
  ];


const handleSubmit = ()=>{
    alert("form was submitted")
}

function Preconditions() {
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div class="block">Preconditions</div>
                <div class="block">
                <Select label = "Ages" options={ages}/>
                </div>
                <div class="block">
                <Select label = "Professions" options = {professions}/>
                </div>
                <input class = 'select' type="submit" value="Next" />
            </form>
        </div>
    );
}

export default Preconditions