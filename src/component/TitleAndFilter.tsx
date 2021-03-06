import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GetData from "../Api/getData";
import ContentBorad from "./ContentBorad";
const _ = require('lodash');

const TitleAndFilter: React.FC = () =>{
    const methodReset =document.getElementById("methodReset")
    const materialReset =document.getElementById("materialReset")
    let [data, setData] = useState<any[]>([])
    let [method, setMethod] = useState<string[]>([])
    let [material, setMaterial] = useState<string[]>([])
    let [defaultData,setDefaultData] = useState<any[]>([])
    let [toggle, setToggle ] = useState<boolean>(false)
    useEffect(()=>{
        async function getData (){
          let tempData:[] = await GetData()
          setData(tempData)
          console.log(data)
         setDefaultData(tempData)
         console.log(defaultData)
        }
        getData()
        },[])
        console.log(data)
    useEffect(()=>{
        if(method.length !== 0){
            let tempData =[]
            for(let i=0; i<method.length; i++){
              for(let j=0; j<defaultData.length; j++){
                 if(defaultData[j].method.findIndex((x: string)=> x === method[i]) !== -1){
                  console.log(defaultData[j])
                     tempData.push(defaultData[j])
                 }
              }
            }
            setData(_.uniqBy(tempData, "id"))
        }
        if(material.length !==0){
            let tempData =[]
              for(let i=0; i<material.length; i++){
                for(let j=0; j<defaultData.length; j++){
                   if(defaultData[j].material.findIndex((x: string)=> x === material[i]) !== -1){
                    console.log(defaultData[j])
                       tempData.push(defaultData[j])
                   }
                }
              }
              setData(_.uniqBy(tempData, "id"))
        
        }
        if(method.length !== 0 && material.length !==0){
            
            let tempData =[]
            for(let i=0; i<method.length; i++){
              for(let j=0; j<defaultData.length; j++){
                 if(defaultData[j].method.findIndex((x: string)=> x === method[i]) !== -1){
                  console.log(defaultData[j])
                     tempData.push(defaultData[j])
                 }
              }
            }
            tempData = _.uniqBy(tempData, "id")
            let tempData2: any[]=[]
            for(let i=0; i<material.length; i++){
              for(let j=0; j<tempData.length; j++){
                 if(tempData[j].material.findIndex((x: string)=> x === material[i]) !== -1){
                  console.log(tempData[j])
                     tempData2.push(tempData[j])
                 }
              }
            }
            setData(_.uniqBy(tempData2, "id"))
         
        }
        if(method.length === 0 && material.length ===0){
            setData(defaultData)
        }
        if(toggle){
            setData(data.filter(x=> x.status === "?????????"))
        } 
    },[method,material,toggle])
    function MaterialChange(e: any){
       let value: string = e.target.value
       let index: number = material.findIndex(x=> x=== value)
       if(index === -1 ){
           setMaterial([
            value,
            ...material
           ])
       }else{
           setMaterial(
               material.filter(x=> x !== value)
           )
       }
    }
    function MethodChange(e: any){
        let value: string = e.target.value
        let index: number = method.findIndex(x=> x=== value)
        if(index === -1 ){
            setMethod([
             value,
             ...method
            ])
        }else{
            setMethod(
                method.filter(x=> x !== value)
            )
        }
     }
     function toggleChange(){
         setToggle(!toggle)
     }
     function RefreshData(e: any){
         console.log(e)
         methodReset?.click()
         materialReset?.click()
         setMethod([])
         setMaterial([])
     }

    return (
    <Container>
     <Title>????????? ??????</Title>
     <Subscription> ?????????????????? ??? ?????? ???????????? ???????????????</Subscription>
     <Filter>
    <FilterContainer>
    <ProcessingContainer >
    <ProcessingButton>???????????? <img src="./arrow_drop_down_24px.png"></img></ProcessingButton>
    <Processing onChange={MethodChange}>
    <div><input type="checkbox" id="??????" name="??????" value="??????" />
    <label htmlFor="??????">??????</label></div>
    <div>
    <input type="checkbox" id="??????" name="??????" value="??????"/>
    <label htmlFor="??????">??????</label>
    </div>
    <input style={{display: "none"}} type="reset" id="methodReset">
        
     </input>
    </Processing> 
    </ProcessingContainer>
    <MaterialContainer>
    <MaterialButton>?????? <img src="./arrow_drop_down_24px.png"></img></MaterialButton>
    <Material onChange={MaterialChange} >
    <div> 
    <input type="checkbox" id="????????????" name="????????????" value="????????????" />
    <label htmlFor="????????????">????????????</label>
    </div>
    <div>
    <input type="checkbox" id="??????" name="??????" value="??????"/>
    <label htmlFor="??????">??????</label>
    </div>
    <div>
    <input type="checkbox" id="?????????" name="?????????"  value="?????????"/>
    <label htmlFor="?????????">?????????</label>
    </div>
    <div>
    <input type="checkbox" id="?????????" name="?????????" value="?????????"/>
    <label htmlFor="?????????">?????????</label>
    </div>
    <div>
    <input type="checkbox" id="??????" name="??????" value="??????" />
    <label htmlFor="??????">??????</label>
    </div>
    <input style={{display: "none"}}  type="reset" id="materialReset">
        
     </input>
    </Material> 
    </MaterialContainer>
    <Refresh onClick={RefreshData}> <img src="./refresh_24px.png"></img>????????? ??????</Refresh>
    </FilterContainer>
    <Toggle>
    <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={toggleChange} style={{display: "none"}}/>
        <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
    <ToggleText> ?????? ?????? ????????? ??????</ToggleText>
    </Toggle>
     </Filter>
     <ContentBorad x={data}></ContentBorad>
    </Container>
    )
    
}

export default TitleAndFilter

const Container =styled.div`
width: 80%;
margin: 0 auto;
margin-top: 2rem;
`
const Title = styled.h1`
color: ${props=> props.theme.color.gray};
font-size: 20px;
font-weight: 700;
`
const Subscription = styled.div`
margin-top: 1rem;
color: ${props=> props.theme.color.gray};
font-size: 16px;
`
const Filter =styled.div`
display: flex;
@media only screen and (max-width: 425px){
    flex-wrap: wrap;
    flex-direction: column
}   
justify-content: space-between;
margin-top: 2rem;
`
const FilterContainer =styled.div`
display: flex;
gap: 1rem;
`
const Refresh =styled.div`
display: flex;
color: ${props=> props.theme.color.blue};
justify-content: center;
align-items: center;
gap: 10px;
@media only screen and (max-width: 425px){
 display: none;
}   
`
const ProcessingContainer = styled.div`
width: 6rem;
&:hover form{
    display: block;
}
`
const MaterialContainer =styled.div`
width: 5rem;

&:hover form{
    display: block;
}
`

const MaterialButton = styled.div`
border: 1px solid #939FA5;
height: 2rem;
font-size: 12px;
display: flex;
justify-content: space-evenly;
text-indent: 0.23rem;   
align-items: center;
`
const ProcessingButton =styled.div`
border: 1px solid #939FA5;
font-size: 12px;
display: flex;
justify-content: space-evenly;
text-indent: 0.23rem;
align-items: center;
height: 2rem;
`
const Processing =styled.form`
display:none;
border: 1px solid #939FA5;
position: absolute;
background: #FFFFFF;
width: 6rem;
z-index:1;
`


const Material = styled.form`
display:none;
border: 1px solid #939FA5;
width: 5rem;
position: absolute;
background: #FFFFFF;
z-index:1;
`
const Toggle = styled.div`
display: flex;
align-items: center;
justify-content: left;
gap: 1rem;
@media only screen and (max-width: 425px){
    margin-top: 2rem;
}   

`
const ToggleText =styled.div`
display: flex;
align-items: center;
`
const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckBoxLabel = styled.label`
 
  top: 0;
  left: 0;
  width: 42px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  &:checked + ${CheckBoxLabel} {
    background: ${props=> props.theme.color.blue};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;