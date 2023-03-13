import React from 'react';
import PsiloDao from './PsiloDao';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Psilo DAO';
  }, []);

  return (
    <div className="App">
      <PsiloDao />
    </div>
  );
}

export default App;
