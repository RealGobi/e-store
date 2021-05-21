import { useState, useEffect } from 'react';
import { useDebounce } from '../../shared/hooks/useDebounce';
import PokemonService from "../../shared/api/service/PokemonService";

export const ShopView = () => {

  const [search, setSearch] = useState<string>('');
  const [resultOfSearch, setResultOfSearch] = useState<any>('');
  const debounceTerm = useDebounce(search, 1000)

  const fetchData = async (x:string) => {
    if (debounceTerm) {
      try {
        const res = await PokemonService.searchPokemon(x);
        setResultOfSearch(res.data);
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchData(search);
  }, [debounceTerm])
  
  return (
    <div className="container">
      <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>fetchData(search)}>Search</button>
      {
        resultOfSearch && 
      <div>
        <h1>Name: {resultOfSearch.name}</h1>
        <p>Height: {resultOfSearch.height}</p>
      </div>
      }
    </div>
  )
}
