import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GetData from "../Api/getData";
import Content from "./Content";

type Data = {
    x: any[]
}


const ContentBorad: React.FC<Data> = props =>{
    return (

    <Container>
        {props.x.length === 0 ? 
        <Fail>조건에 맞는 견적 요청이 없습니다  </Fail>: props.x.map(x => <Content x={x}></Content>)}
   
    </Container>
    )
    
}
export default ContentBorad

const Container =styled.div`
display: flex;
width: 100%;
margin: 2rem auto;
margin-top: 2rem;
flex-wrap: wrap;
gap:1rem;
`
const Fail =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 4rem;
border: 1px solid #C2C2C2;
`