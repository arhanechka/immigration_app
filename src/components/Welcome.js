import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {preconditions, conditions} from '../data/data'
import store from '../store/store'
import { addData, editData } from "../store/actions/index";




const Welcome = () => {
  useEffect(() => {  
    Object.entries(preconditions).map(item => store.dispatch( addData({ title: item[1][0].label, name: item[1][0].value }))) ;
    Object.entries(conditions).map(item => store.dispatch( addData({ title: item[1][0].label, name: item[1][0].value }))) ;
});

  return(
      <div class="block">Welcome to the emigration laboratory!
       <Link to="/prec"><div class="block"> <button class = "button">Let's start!</button></div>  </Link>
      </div>)}

      export default Welcome