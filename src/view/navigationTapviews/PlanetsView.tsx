import { useContext } from "react";
import { PlanetsContext } from "../../shared/provider/PlanetsProvider";

export const PlanetsView = () => {
  const [planets, ] = useContext(PlanetsContext);

  return (
    <div>
      <h1>Planets view</h1>
      {planets && planets.map((p: any, i: number) => {
        return <div key={i}>{p.name}</div>
      })}
    </div>
  )
}
