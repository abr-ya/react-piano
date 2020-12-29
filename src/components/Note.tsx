import React from 'react';
import styled from 'styled-components';
import { NoteType } from '../helpers';

interface INote extends NoteType {
  // eslint-disable-next-line no-unused-vars
  noteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Black = styled.button`
  background: black;
  width: 40px;
  height: 130px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  border: 1px solid black;
  box-shadow: 2px 5px;
  margin: 1px;
  box-sizing: border-box;

  :active {
    background: #eee;
  }
`;

const Note = ({ note, color, noteHandler }: INote) => (
  color === 'white'
    ? <White value={note} onClick={noteHandler} />
    : <Black value={note} onClick={noteHandler} />
);

export default Note;
