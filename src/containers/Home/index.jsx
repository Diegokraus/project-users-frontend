import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
} from "./styles";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser])

    history.push('/usuarios');
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Cadastro de Pessoas</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        {/* <Link to="/usuarios">Usuarios</Link> */}
      </ContainerItems>
    </Container>
  );
};

export default App;
