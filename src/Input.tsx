import { useState } from 'react';

export function Input() {
  const [name, setName] = useState('');
  return (
    <div>
      <h1 data-testid="input-result">Input result : {name}!</h1>
      <label htmlFor="input-type">Enter a value</label>
      <input
        id="input-type"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
