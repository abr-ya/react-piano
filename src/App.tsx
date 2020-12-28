import React from 'react';
import { notes } from './helpers';
import Octave from './components/Octave';

function App() {
  return (
    <div>
      <Octave notes={notes} />
    </div>
  );
}

export default App;
