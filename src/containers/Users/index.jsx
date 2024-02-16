import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  Container,
  Image,
  User,
} from "./styles";

import Button from "../../components/Button";
import ContainerItems from "../../components/ContainerItems";
import H1 from '../../components/Title'
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers(){
      const {data:newUsers} = await axios.get("http://localhost:3000/users")
      setUsers(newUsers);
    }

    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems>
        <H1>Lista de Pessoas</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-lixo" />
              </button>
            </User>
          ))}
        </ul>
        
        <Button isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;
