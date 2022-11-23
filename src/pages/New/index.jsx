import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { ButtonText } from "../../components/ButtonText"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from "../../service/api"

import { Container, Form } from "./styles"


export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewlink] = useState("")

  const navigate = useNavigate()

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewlink("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !==deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !==deleted))
  }

  function handleBack(){
    navigate(-1)
  }

  async function handleNewNote(){
    if(!title){
      return alert("É preciso informar um titulo")
    }
    
    if(newTag || newLink){
      return alert("Há informações inseridas nos campos Novo Link ou Nova Tag sem adicionar, finalize-as ou deixe o campo em branco")
    }
    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso")
    handleBack()
  }

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title='Voltar' onClick={handleBack}/>
          </header>
              <Input
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}   
              />
              <Textarea
                 placeholder="Observações"
                 onChange={e => setDescription(e.target.value)}
              />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
              ))
            }
            <NoteItem 
                isNew 
                placeholder="Novo link"
                value={newLink}
                onChange={e => setNewlink(e.target.value)}
                onClick={handleAddLink}
              />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
            {
              tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
              ))
            }
              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
               />
               
            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}