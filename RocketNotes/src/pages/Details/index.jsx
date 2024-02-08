import { Container, Links, Content} from "./styles"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  
  return( //um componente sempre retorno apenas um elemento!
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quibusdam, expedita cupiditate sequi non quo ut, obcaecati et assumenda quisquam facere ratione. Praesentium quidem at provident eaque, aperiam aliquid reprehenderit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quibusdam, expedita cupiditate sequi non quo ut, obcaecati et assumenda quisquam facere ratione. Praesentium quidem at provident eaque, aperiam aliquid reprehenderit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quibusdam, expedita cupiditate sequi non quo ut, obcaecati et assumenda quisquam facere ratione. Praesentium quidem at provident eaque, aperiam aliquid reprehenderit?

          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">www.rocketseat.com.br</a></li>
              <li><a href="#">www.rocketseat.com.br</a></li>  
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    
    </Container>   
  ) 
}