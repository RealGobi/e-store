import { useState, useEffect } from 'react';
import PokemonService from "../../shared/api/service/PokemonService";


export const PlanetsView = () => {
  const [state, setstate] = useState([]);
const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data } = await PokemonService.get100Poke();
      setstate(data.results);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      
    }
  };
  
  console.log(state);
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [])
  
  const displayData = () => {
   return state.map((s:any,idx: number) => { 
      return <div key={idx}><h1>{s.name}</h1></div>
    })}
  
    const spinner = () => {
      return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    };

  return (
    <>
      {loading? spinner() : displayData() }
    </>
  )
}
