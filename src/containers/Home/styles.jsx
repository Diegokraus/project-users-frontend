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

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.15)
  );
  border-radius: 61px 61px 0 0;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin-bottom: 80px;
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

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
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
`;


