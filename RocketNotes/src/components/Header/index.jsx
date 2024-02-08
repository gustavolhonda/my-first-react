import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/gustavolhonda.png"
          alt="Foto do usuário"
        />  

        <div>
          <span>Bem-vindo,</span>
          <strong>Gustavo Honda</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
        </Logout>
    </Container>
  );
}