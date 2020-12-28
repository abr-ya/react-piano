import React from 'react';
import { NoteType } from '../helpers';
import Note from './Note';

interface IOctave {
  notes: NoteType[];
}

const Octave = ({ notes }: IOctave) => (
  <div>
    {notes.map((item: NoteType) => (
      <Note />
    ))}
  </div>
);

export default Octave;
