import React from 'react'
import Select from "react-select";
import customStyles from '../utils/SelectCustomStyles'


  const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex" }}>
      <div class = 'select'>
        {value}
      </div>
    </div>
  );

  const CustomControl = (props) => {
    return(
      <div>
          <div class = 'block'>{props.label}</div>
    <Select  styles={customStyles}
      defaultValue={props.options[0]}
      formatOptionLabel={formatOptionLabel}
      options={props.options}
      onChange={props.handleChange}
    />
    </div>
  )};


export default CustomControl