import React from "react";
import styled from "styled-components";

interface ICategory {
    exit: any
  }
  

const Sidebar: React.FC<ICategory> = (props) =>{
  
return (
    <BackGround>
    <Back  onClick={props.exit}></Back>
    <Container>
         <Title> <b>CAPA</b>&nbsp;파트너스 </Title>
         <Menu>
         <Company>
                <img src="./company.svg"/>
                <CompanyTitle>
                파트너정밀가공
                </CompanyTitle>
         </Company>
         <Logout>
             로그아웃
         </Logout>
         </Menu>
    </Container>
    </BackGround>
)
}
export default Sidebar
const Title = styled.div`
 display: flex;
 align-items:center;
 color: ${props=> props.theme.color.blue};
 border-bottom: 1px solid #E5E5E5;
 font-size: 14px;
 height: 2rem;
 margin: 1rem;
 font-weight: 700
 `
const BackGround =styled.div`
position: fixed;
width: 100vw;
height: 100%;
background-color: rgba(0,0,0,0.5);
z-index: 1;
`
const Back = styled.div`
width: 30vw;
height: 100%;
position: fixed;
right:0;
z-index:1;
`
const Container = styled.div`
position: fixed;
width: 70vw;
height: 100vh;
max-height: 100%;
background-color: white;
border: 1px solid black;
z-index: 1;
`

const Company = styled.div`
display: flex;
gap: 1rem;
align-items: center;
   img {
      width: 20px;
      background-color: black;
  }
`
const CompanyTitle = styled.div`
`
const Menu =styled.div`
margin: 1rem;
display: flex;
gap:1rem;
flex-direction: column
`
const Logout =styled.div``