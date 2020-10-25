import React, { useState }  from 'react'
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
    const [value, setValue] = useState(0);

    const change = (option)=>{
      setValue(option)
      console.log(value.label)
    }
    return(
      <div>
          <div class = 'block'>{props.label}</div>
    <Select  styles={customStyles}
      defaultValue={props.options[0]}
      formatOptionLabel={formatOptionLabel}
      options={props.options}
      onChange={change}
    />
    </div>
  )};


export default CustomControl