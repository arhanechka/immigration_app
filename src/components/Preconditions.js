import React, { useEffect } from 'react'
import Select from "./Select";
import { Link } from 'react-router-dom';
import store from '../store/store'
import { addData, editData } from "../store/actions/index";

const data = {
ages: [
  { value: "18 - 25", label: "Age" },
  { value: "25 - 35", label: "Age" },
  { value: "30 - 40", label: "Age" },
  { value: "40 - 50", label: "Age" },
  { value: "50 +", label: "Age" }
],
professions: [
  { value: "Information technologies", label: "Profession area" },
  { value: "Labour", label: "Professional area" },
  { value: "Service", label: "Professional area" },
  { value: "Medicine", label: "Professional area" },
  { value: "Education", label: "Professional area" }
],
family: [
  { value: "single", label: "Family composition" },
  { value: "two", label: "Family composition" },
  { value: "three", label: "Family composition" },
  { value: "four", label: "Family composition" },
  { value: "five or more", label: "Family composition" }
],
savings: [
  { value: "without savings", label: "Savings" },
  { value: "1 - 5 thousands", label: "Savings" },
  { value: "5 - 10 thousands", label: "Savings" },
  { value: "10 - 20 thousands", label: "Savings" },
  { value: "20 - 30 thousands", label: "Savings" },
  { value: "30 or more thousands", label: "Savings" }
],
passiveIncome: [
    { value: "0 - 1 thousands", label: "Passive Income" },
    { value: "1 - 2 thousands", label: "Passive Income" },
    { value: "2 - 3 thousands", label: "Passive Income" },
    { value: "3 - 5 thousands", label: "Passive Income" },
    { value: "5 thousand or more", label: "Passive Income" },    
    { value: "No passive income", label: "Passive Income" }
  ]
}

function Preconditions() {
  // const [age, setAge] = useState(ages[0].value);
  // const [profession, setProfession] = useState(professions[0].value);

  // const handleAge = (selectedOption) => {
  //   let age = selectedOption.value;
  //   setAge(age)
  //   console.log(age)
  // }

  // const handleProfession = (selectedOption) => {
  //   let profession = selectedOption.value;
  //   setProfession(profession)
  //   console.log(profession)
  // }

    const handleSelect = (selectedOption) => {
      store.dispatch( editData({ title: selectedOption.label, name: selectedOption.value }) );
    }

    const getData = ()=>{
        return Object.entries(data).map(item =>
          (<Select label={item[0]} options={item[1]} handleChange={handleSelect} />))
      }

      useEffect(() => 
        Object.entries(data).map(item => store.dispatch( addData({ title: item[1][0].label, name: item[1][0].value })))) ;


  return (
    <div className="App">
      <form>
        <div class="block">Preconditions</div>
        <div class="block">
          {getData()}
        </div>
        <Link to="/cond"><input class='select' type="submit" value="Next"/></Link>
      </form>
    </div>
  );
}

export default Preconditions