import {DODAJ_TRANSAKCIJU, UKLONI_TRANSAKCIJU} from './types'

 export const dodajTransakciju = ({id,title,price,date}) => (dispatch) =>{

   const novaTransakcija = {
     id,
     title,
     price,
     date
   }
   dispatch({type: DODAJ_TRANSAKCIJU, payload: novaTransakcija});
 };

 export const ukloniTransakciju = (id) =>  (dispatch) => {
   dispatch({type:UKLONI_TRANSAKCIJU, payload: id})
 }