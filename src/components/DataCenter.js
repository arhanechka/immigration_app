import React, { useState } from 'react'
import store from '../store/store'
import { connect } from "react-redux";


const mapStateToProps = state => {
  console.log(state.userData)
  return { userData: state.userData };
};

const ConnectedList = ({ userData }) => (
    <div>
        <div>Your parameters are:</div>
  <ul>
    {userData.map(el => (
      <li key={el.title}>{el.title}: {el.name}</li>
    ))}
  </ul>
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;