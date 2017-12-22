import reducer from './ducks/reducer'
import { createStore } from 'redux'


const initialState = {
    housename: '',
    description: '',
    loan: '',
    recommend: 0,
    desired: 0,
    address: '',
    city: '',
    zip: 0
}

export default (createStore(reducer, initialState))