import styled from "styled-components";
export const Container = styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:50px;
   
`

export const Title = styled.span`
    font-size:2.7rem;
    font-weight:800;
    height:40px;
    width:60px;
    color:#2ECC71 ;
    margin:15px auto;
    background-image: url(./logo.png);
    text-align:center;

`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:450px;
    margin:0 auto;
    background:#fff;
    padding:15px;
    border-radius:12px;
    font-family: "Roboto", sans-serif;
   
    box-sizing:border-box;
   
    @media(max-width:750px){
        width:100%;
       
    };
    @media(max-width:520px){
        width:100%;
       
    };
`

export const InputWrapper = styled.div`
     width:100%;
     margin:20px 0;
     box-sizing: border-box;


`


export const Heading = styled.h3`
    margin:30px auto;
    font-size:18px;
    font-weight:500;
    color:#1B2639;
    text-align:center;
`

export const Label = styled.p`
    font-size:12px;
    color:#566573 ;
    margin:5px auto;
`
export const InputBox = styled.input`

    width:100%;
    height:50px;
    border-top:1px solid #7B7D7D;
    border-left:1px solid #7B7D7D;
    border-right:1px solid #E5E8E8 ;
    border-bottom:1px solid #E5E8E8 ;
    outline:none;
    box-sizing: border-box;
    padding: 0 10px;
    font-size:16px;
    font-weight:100;
    border-radius:10px;

`
export const LoginBtn = styled(InputBox)`
    background:#2ECC71;
    border:none;
    color:#fff;
    font-weight:500;
    &:hover{
        background:#1D8348;
    }
`
export const LineBreak = styled.hr`
    border-bottom:#FDFEFE;
    margin-bottom:30px;
`
export const LinkWrapper = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    margin:20px auto;
    @media(max-width:750px){
        flex-direction:row;
        justify-content:space-around;
    }

    @media(max-width:615px){
        flex-direction:column;
        align-items:center
    }

`
export const Box = styled.div`
   width:100%;
   display:flex;
   margin:5px 10px;
   justify-content:center;
  


`
export const BottomLinks = styled.p`
    color:#566573; 
     font-size:14px;
     margin:0 8px;
     cursor-pointer:pointer;
     & a{
         text-decoration:none;
         color:#566573; 
     }

`
