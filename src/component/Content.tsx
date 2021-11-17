import React from "react";
import styled from "styled-components";

type data = {
    x: {
        id: number,
        title:  string,
        client: string,
        due: string,
        count: number,
        amount: number,
        method: [],
        material: [],
        status: string
    };
  }

const Content: React.FC<data> = props =>{

    return (
       <Container>
           {props.x.status=== "상담중" ? <Mark>상담중</Mark>: ""}
        <Info>
       <Project>
           {props.x.title}
       </Project>
       <Client>
           {props.x.client}
       </Client>
       <Day>
       {props.x.due}까지 납기
       </Day>
       </Info>
       <InfoTable>
           <Menu>
               <tr> 도면 개수</tr>
               <tr> 총 수량</tr>
               <tr> 가공방식</tr>
               <tr> 재료</tr>
           </Menu>
           <Data>
               <tr>{props.x.count}</tr>
               <tr>{props.x.amount}</tr>
               <tr>{props.x.method.join(", ")}</tr>
               <tr>{props.x.material.join(", ")}</tr>
           </Data>
       </InfoTable>

       <Button>
           <Request>
               요청 내역 보기
           </Request>
           <Chat>
               채팅하기
           </Chat>
       </Button>
       </Container>
    )
}
export default Content

const Mark =styled.div`
    position: absolute;
    width: 3rem;
    height: 1.4rem;
    color: #FFA000;
    border: 1px solid #FFA000;
    border-radius: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2rem;
    right: 2rem;
`
const Container =styled.div`
position: relative;
width: 23rem;
height: 23rem;
border: 1px solid #E5E5E5;
`
const Info =styled.div`
margin: 2rem;
height: 6rem;
border-bottom: 1px solid #E5E5E5
`
const Project =styled.div`
font-size: 16px;
color: ${props=> props.theme.color.gray}
`
const Client =styled.div`
font-size: 14px;
margin-top: 1rem;
color: ${props=> props.theme.color.gray}
`
const Day =styled.div`
margin-top: 1.4rem;
font-size: 14px;
font-weight: 400;
color: ${props=> props.theme.color.lightgray};
margin-bottom: 0.4rem;
`

const InfoTable = styled.div`
margin: 2rem 2rem 0 2rem;
td tr{
    color: ${props=> props.theme.color.gray};
    width: 1rem;
    height: 2rem;

}
`
const Menu =styled.td`
width: 5rem;
color: ${props=> props.theme.color.gray};
`
const Data =styled.td`
color: ${props=> props.theme.color.gray};
font-weight: 700;
`
const Button = styled.div`
margin: 1rem 2rem 0 2rem;
display: flex;
gap: 1rem;
`

const Request = styled.div`
background-color: #2196F3;
width: 6rem;
height: 2rem;
border-radius: 4px;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Chat =styled.div`
border: 1px solid #2196F3;
width: 4rem;
height: 2rem;
color: #2196F3;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
`