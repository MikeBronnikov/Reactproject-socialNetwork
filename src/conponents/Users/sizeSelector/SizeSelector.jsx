import React from "react";
import styled from "styled-components"
const SizeSelector = (props) => {
    const Wrapper = styled.div`
    text-align: center;
    padding-bottom: 15px;
    `
    function handleChange(event){
        props.setPageSize(event.currentTarget.value)
    }
    const sizeVariety = [5, 10, 15, 50, 100]
  return (
    <Wrapper>
    <span>Показывать по </span>
    <select onChange={handleChange} size="1" >
    {sizeVariety.map((num)=> <option value={num} selected={num === props.pageSize && 'selected'}>{num}</option>)}
    </select>
    </Wrapper>
  );
};
export default SizeSelector;

