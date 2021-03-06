import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background:transparent;
// border:0.05rem solid #182479;
border:none;
border-radius: 5%;
color:#182479;
padding:0.2rem 0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    backgound:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus {
    outline:none;
}
`
 
