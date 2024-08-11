import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
`

export const EditorBox = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  margin: 20px;
`

export const EditArea = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`

export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  color: #323f4b;
  font-weight: 500;
  font-size: large;
  border: 1px solid #cbd2d9;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  width: 90%;
`

export const Para = styled.p`
  color: #323f4b;
  font-size: large;
  font-family: 'Roboto';
  font-weight: 500;
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: 0px;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: medium;
  font-weight: 500;
`
