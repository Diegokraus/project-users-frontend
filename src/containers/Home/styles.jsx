import styled from "styled-components";
import Background from "../../assets/background1.jpg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #eee;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
`;




