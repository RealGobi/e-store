import { useState } from 'react';

import StarwarsApiService from '../../shared/api/service/StarwarsApiService';



export const NewsView = () => {
const [character, setCharacter] = useState<any>([]);
const [num, setNum] = useState(0);


const fetchOneCharacter = async () => {
  try {
    const res = await StarwarsApiService.getOneCharacter(num);
    setCharacter(res.data);
    console.log(character);
    
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <h1>News view</h1>
      <input type="number" onChange={(e:any)=> setNum(e.target.value)} />
      {num && <button onClick={()=>fetchOneCharacter()}>Get One Character</button>}
      {character && <p>{character.name}</p>}
    </div>
  )
};
