import { useContext, useEffect } from "react";
import StarwarsApiService from "../../shared/api/service/StarwarsApiService";
import { PlanetsContext } from "../../shared/provider/PlanetsProvider";
import { PlanetsView } from "./PlanetsView";

export const GalleryView = () => {
  const [planets, setPlanets] = useContext(PlanetsContext);

  useEffect(() => {
    fetchAllPlanets();
  }, []);
  
  const fetchAllPlanets = async () => {
    try {
      const res = await StarwarsApiService.getPlanets();
      setPlanets(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

//get api content on first render, send to context and render out in Planetview component
  return (
    <div>
      <h1>Gallery view</h1>
      <hr/>
      <PlanetsView />
    </div>
  )
}
