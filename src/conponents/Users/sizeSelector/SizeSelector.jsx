import React from "react";
import styled from "styled-components"
const Wrapper = styled.div`
text-align: center;
padding-bottom: 15px;
`

const SizeSelector = (props) => {

    function handleChange(event){
        props.setPageSize(event.currentTarget.value)
    }
    const sizeVariety = [5, 10, 15, 50, 100]
  return (
    <Wrapper>
    <span>Показывать по </span>
    <select onChange={handleChange} size="1" defaultValue={props.pageSize} >
    {sizeVariety.map((num)=> <option key={num} value={num} >{num}</option>)}
    </select>
    </Wrapper>
  );
};
export default SizeSelector;

