import { useContext } from 'react';
import { StarShipContext } from '../../shared/provider/StarShipApiProvider';

export const ShopView = () => {
  const [starShips, setStarShips] = useContext(StarShipContext);

  return (
    <div className="container">
          {starShips && starShips.map((s: any, idx: number) => {
         return ( <div className="ship-card" key={idx}>
                      <h1 className="header">{s.name} <hr/> </h1> 
                      <p className="class">Klass: {s.starship_class}</p>
                      <p className="kind">Modell {s.model}</p>
                      <p className="price">Pris: {s.cost_in_credits} credits</p>
                      <p className="manu">Tillverkare: {s.manufacturer}</p>
                      <p className="crew">Bestättnings: {s.crew}st</p>
                </div>)})}
    </div>
  )
}
