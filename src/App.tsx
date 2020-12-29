import React from 'react';
import { notes } from './helpers';
import Octave from './components/Octave';

const App = () => {
  const noteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
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
