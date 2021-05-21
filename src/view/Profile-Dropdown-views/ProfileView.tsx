import { useState } from 'react';
import backend_service from '../../shared/api/service/backend_service';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';


export const ProfileView = () => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState<any>('');
  const [itemDescription, setItemDescripton] = useState('');
  const [send, setSend] = useState(false);

  const history = useHistory();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let item = {
      itemName,
      itemCategory,
      itemPrice,
      itemDescription
    }

    await backend_service.createItem(item)
    .then(() => console.log('Item Created'))
    .then(() => setSend(true))
    .catch(err => {
      console.error(err);
    });
    setTimeout(() => {
      setSend(false);
      setItemName('');
      setItemPrice('');
      setItemDescripton('');
      setItemCategory('')
    }, 1000);
  }

  return (
    <div>
      <p>Profile view</p>
      <form className="main-form" onSubmit={submitHandler}>
        <div className="name-j">
          <label>
            Name: <br />
            <input required type="text" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value) } />
          </label>
        </div>
        <div className="category-j">
          <label>
            Kategori: <br />
          <select required name="itemCategory" value={itemCategory} onChange={(e) => setItemCategory(e.target.value) } >
              <option >Välj...</option>
              <option value="flower">Blommor</option>
              <option value="fruit">Frukt</option>
              <option value="toy">Leksaker</option>
              <option value="human">Människa</option>
            </select>
          </label>
        </div>
        <div className="price-j">
          <label>
            Pris: <br />
            <input required type="number" name="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value) }  />
          </label> 
        </div>
        <div className="description-j">
          <label>
            Beskrivning: <br />
            <textarea required name="itemDescription" value={itemDescription} onChange={(e) => setItemDescripton(e.target.value) }  />
          </label>
        </div>
        <div className="submit-j">
          {!send && <input type="submit" value="Submit" />}
          {send && <p style={{fontSize:'30px', color:'red'}}>Skickat!</p>}
        </div>
      </form>
      <h2 style={{textAlign:'center', padding:'20px', cursor:'pointer'}} onClick={()=>history.push(RoutingPath.SavedView)}>Se produkter</h2>
    </div>
  )
}
