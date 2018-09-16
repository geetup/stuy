import {createStore} from 'redux';
import reducer from './reducer';
const inintialStore = {
    count:0
};
const store = createStore(reducer,inintialStore);

export default store;