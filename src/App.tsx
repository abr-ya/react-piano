import React from 'react';
import { notes } from './helpers';
import Octave from './components/Octave';

const App = () => {
  const noteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  return (
    <div>
      <Octave
        notes={notes}
        noteHandler={noteHandler}
      />
    </div>
  );
};

export default App;
