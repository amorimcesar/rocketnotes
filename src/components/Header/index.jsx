import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/amorimcesar.png" 
          alt="Imagem do Usuário" />

          <div>
            <span>Bem-Vindo</span>
            <h1>César Amorim</h1>
          </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>      
    </Container>
  );
}