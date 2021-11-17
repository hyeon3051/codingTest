import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"

const Header: React.FC = () =>{
    const [moblie, setMoblie] = useState<boolean>(false)
    const [sidebar,setSidebar] =useState<boolean>(false)
    const showSidebar = () => {
        if(window.innerWidth <= 425) {
           setMoblie(true);
        } else {
           setMoblie(false);
        }
    };
    useEffect(()=>{
        showSidebar()
    },
        []
    )
    window.addEventListener('resize', showSidebar); 
    function toggleSidebar(){
        setSidebar(!sidebar)
    }
    return (
        <>
            {!moblie ?
            <Container>
            <Title> <b>CAPA</b> 파트너스 </Title>
            <Menu>
                <Company>
                <img src="./company.svg"/>
                <CompanyTitle>
                A 가공 업체 
                </CompanyTitle>
                </Company>
                <Bar></Bar>
                <Logout>
                    로그아웃
                </Logout>
            </Menu>
            </Container>
            : sidebar ? 
            <>
       <Sidebar exit={toggleSidebar}/>  
       <Container>
       <Title> <img onClick={toggleSidebar} src="./hamberger.png"></img> <b>CAPA</b> &nbsp; 파트너</Title>
       </Container>
       </>
           :
            <Container> 
                 <Title> <img onClick={toggleSidebar} src="./hamberger.png"></img> <b>CAPA</b> &nbsp; 파트너</Title>
            </Container>
            } 
        </>
    )
}
export default Header 
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.color.blue};
 `
 const Title = styled.div`
 display: flex;
 align-items:center;
    color: white;
    margin: 20px;
    img{
        width: 3rem;
    }
 `
 const Menu = styled.div`
    display: flex;
    color: white;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    max-width: 16rem;
    margin: 20px;
 `
 const Company = styled.div`
 display: flex;
 gap: 1rem;
 align-items: center;
    img {
       width: 20px;
   }
 `
 const CompanyTitle = styled.div`
 `
 const Bar =styled.div`
 background-color: white;
 width: 2px;
 height: 32px;
 `

 const Logout = styled.div`
 
 `
 
 