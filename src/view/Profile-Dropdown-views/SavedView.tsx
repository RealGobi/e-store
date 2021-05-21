import { useState, useEffect } from 'react';
import backend_service from '../../shared/api/service/backend_service';

export const SavedView = () => {
  const [dataRes, setDataRes] = useState<any>([]);

useEffect(() => {
  fetchData();
}, [])

const fetchData = async () => {    
  try {
    const {data} = await backend_service.getItem();
    setDataRes(data);
  } catch (error) {
    console.log(error);
  }
};

  const deleteData = async (id:number) => {
    try {
      await backend_service.deleteData(id);
      fetchData();
      console.log('item deleted');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataRes);
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Produkter</h1>
      {dataRes && dataRes.sort((a:any, b:any) => a.itemName.localeCompare(b.itemName)).map((data: any) => {
        return (
          <div className="card-data" key={data._id}>
            <h1>{data.itemName}<button style={{float:'right', padding:'10px', background:'rgb(255, 146, 146)', borderRadius:'6px', cursor:'pointer'}} onClick={()=>deleteData(data._id)}>Delete</button></h1>
            <p>Beskrivning: {data.itemDescription}</p>
            <p>Pris: {data.itemPrice}kr</p>
          </div>

        )
      })}

    </div>
  )
}
