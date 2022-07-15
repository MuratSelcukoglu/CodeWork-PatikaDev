import React, {useState} from 'react';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {createStore} from 'redux';

const MyProvider = ({children}) => {
  const [favouriteList, setFavouriteList] = useState([]); // initialState
  const store = createStore(reducers, {favouriteList});

  return <Provider store={store}>{children}</Provider>; // Provider arasına Router'ı yazdığımız için children kullanıyoruz
};
export default MyProvider;
