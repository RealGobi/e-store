
import http from '../backend';

const getItem = () => {
  return http.get('/item/')
};

const createItem = (item: any) => {
  return http.post('/item', item)
};

const deleteData = (id:number) => {
  return http.delete(`/item/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getItem, createItem, deleteData };