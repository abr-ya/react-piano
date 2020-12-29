import React from 'react';
import styled from 'styled-components';
import { NoteType } from '../helpers';
import Note from './Note';

interface IOctave {
  notes: NoteType[];
  // eslint-disable-next-line no-unused-vars
  noteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Octave = ({ notes, noteHandler }: IOctave) => (
  <Wrapper>
    <div>
      {notes.map((item: NoteType) => (
        <Note
          key={item.note}
          color={item.color}
          note={item.note}
          noteHandler={noteHandler}
        />
      ))}
    </div>

  </Wrapper>
);

export default Octave;
