import React, { useEffect } from 'react'
import Select from "./Select";
import store from '../store/store'
import { addData, editData } from "../store/actions/index";
import { Link } from 'react-router-dom';

const data = {
  climates: [
  { value: "cold", label: "Climate" },
  { value: "warm", label: "Climate" },
  { value: "hot", label: "Climate" },
  { value: "no difference", label: "Climate" }
],
world_parts: [
  { value: "Europe", label: "World part" },
  { value: "North America", label: "World part" },
  { value: "South America", label: "World part" },
  { value: "Australia", label: "World part" },
  { value: "no difference", label: "World part" }
],
avarage_life_raiting: [
  { value: "500-1000", label: "Life Raiting" },
  { value: "1000-2000", label: "Life Raiting" },
  { value: "2000-3000", label: "Life Raiting" },
  { value: "3000-4000", label: "Life Raiting" },
  { value: "5000 and more", label: "Life Raiting" }
],
education_possibility: [
  { value: "true", label: "Education Possibility" },
  { value: "false", label: "Education Possibility" }
]
};

function Conditions() {
  // const [climate, setClimate] = useState(climates[0].value);
  // const [part, setPart] = useState(world_parts[0].value);

  // const handleClimate = (selectedOption) => {
  //   let climate = selectedOption.value;
  //   setClimate(climate)
  //   console.log(climate)
  // }

  // const handleWorldPart = (selectedOption) => {
  //   let part = selectedOption.value;
  //   setPart(part)
  //   store.dispatch( addArticle({ title: selectedOption.label, name: selectedOption.value }) );
  //   console.log(store.getState())

  // }

  const handleSelect = (selectedOption) => {
    store.dispatch( editData({ title: selectedOption.label, name: selectedOption.value }) );
  }

  const handleSubmit = () => {
    console.log(store.getState())
    alert(store.getState())
  }

  const getData = ()=>{
    let list = [];
    // for (const [key, value] of Object.entries(data)) {
      // list.push (<Select label={key} options={value} handleChange={handleSelect} />);
      return Object.entries(data).map(item =>
        (<Select label={item[0]} options={item[1]} handleChange={handleSelect} />))
    // return list;
    }

    useEffect(() => 
    Object.entries(data).map(item => store.dispatch( addData({ title: item[1][0].label, name: item[1][0].value })))) ;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="block">Conditions</div>
        <div class="block">
        {getData()}
        </div>
        <Link to="/result"><input class='select' type="submit" value="Next"/>  </Link>
      </form>
    </div>
  );
}

export default Conditions