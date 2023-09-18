import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
  const names = ['Bingus', 'Frong', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick(){
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="🎇 August 🌵🐸🌵 Luhrs 🎇"/>
      <ul>
        {names.map((name)=> (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}
