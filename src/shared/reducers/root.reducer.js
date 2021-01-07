import { combineReducers } from 'redux'
import locationSlice from './location.slice'

const reducers = combineReducers({
    locations: locationSlice.reducer
})

export default reducers