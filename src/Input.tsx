import React, { useState } from 'react';

export function Input() {
  const [name, setName] = useState('');
  return (
    <div>
      <h1 data-testid="input-result">Input result : {name}!</h1>
      <input
        data-testid="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
