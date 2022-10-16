import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header'
import { Input } from '../../components/input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'


export function Home () {
  return (
    <Container>
      <Brand>
        <h1>
          Rocketnotes
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Titulo" icon={ FiSearch }/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React',
            tags:[
              {id:'1', name:'React'},
              {id:'2', name:'Rocket'}
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}
