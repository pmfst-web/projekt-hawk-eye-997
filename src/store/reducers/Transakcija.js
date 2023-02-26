import {DODAJ_TRANSAKCIJU,UKLONI_TRANSAKCIJU} from '../actions/types';

const initialState = {
    transakcije :[
      {id: 1, title: 'Hrana' ,price: -20, date: '20.02'},
      {id: 2, title: 'Automobil' ,price: -200, date: '19.01'},
      {id: 3, title: 'Stanarina' ,price: -300, date: '22.02'},
      {id: 4, title: 'Drugi račun' ,price: 2000, date: '23.03'},
      {id: 5, title: 'Plin' ,price: 70, date: '21.02'},
    ]
};

export default (state = initialState, {type, payload}) => {
  switch (type){
    case DODAJ_TRANSAKCIJU:
      return{
        ...state,
        transakcije: [payload, ...state.transakcije],
      };
    case UKLONI_TRANSAKCIJU:
      return{
        ...state,
        transakcije: state.transakcije.filter((transaction) =>transaction.id !== payload,
         ),
      } ; 
    default:
    return state;
  }
}