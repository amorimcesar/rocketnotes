import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/amorimcesar.png" 
          alt="Imagem do Usuário" />

          <div>
            <span>Bem-Vindo</span>
            <strong>César Amorim</strong>
          </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>      
    </Container>
  );
}