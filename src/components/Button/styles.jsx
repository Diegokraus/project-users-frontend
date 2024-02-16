import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;
  background-color: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
  border-radius: 14px;
  border: ${props => props.isBack ? '1px solid #fff' : 'none'};
  font-weight: bold;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

     img{
     transform: ${props => props.isBack && 'rotate(180deg)'};
  }
`;