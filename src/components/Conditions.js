import React, { useEffect } from 'react'
import Select from "./Select";
import store from '../store/store'
import { editData } from "../store/actions/index";
import { Link } from 'react-router-dom';
import {preconditions, conditions} from '../data/data'

function Conditions(props) {

  let data = props.title==="Conditions"? conditions: preconditions;
  let link = props.title==="Conditions"? "/result": "/cond";
  let header = props.title==="Conditions"? "Conditions": "Preconditions"
  
  const handleSelect = (selectedOption) => {
    store.dispatch( editData({ title: selectedOption.label, name: selectedOption.value }) );
  }

  const handleSubmit = () => {
    console.log(store.getState())
    alert(store.getState())
  }

  const getData = ()=>{
  return Object.entries(data).map(item =>
        (<Select label={item[0]} options={item[1]} handleChange={handleSelect} />))
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
  <div class="block">{header}</div>
        <div class="block">
        {getData()}
        </div>
        <Link to={link}><input class='select' type="submit" value="Next"/>  </Link>
      </form>
    </div>
  );
}

export default Conditions