import React, {ChangeEvent} from 'react';

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = (props: InputProps) => {


  return(
    <div>
      <label>
        <span> Enter Artist</span>
        <input onChange={props.handleChange}/>
      </label>
    </div>
  )
};

export default SearchInput;