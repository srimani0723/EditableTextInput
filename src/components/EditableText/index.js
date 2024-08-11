import {useState} from 'react'

import {
  Container,
  EditorBox,
  EditArea,
  Heading,
  Input,
  Button,
  Para,
} from './stylecomponents'

const EditableText = () => {
  const [text, setText] = useState('')
  const [toggleEdit, setToggleEdit] = useState(false)

  return (
    <Container>
      <EditorBox>
        <Heading>Editable Text Input</Heading>
        <EditArea>
          {toggleEdit ? (
            <Para>{text}</Para>
          ) : (
            <Input
              type="text"
              onChange={e => setText(e.target.value)}
              value={text}
            />
          )}
          <Button type="button" onClick={() => setToggleEdit(prev => !prev)}>
            {toggleEdit ? 'Edit' : 'Save'}
          </Button>
        </EditArea>
      </EditorBox>
    </Container>
  )
}

export default EditableText
