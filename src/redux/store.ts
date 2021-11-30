import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import currencyReducer from './currencyReducer'

let rootReducer = combineReducers({
  currency: currencyReducer,
})

//создание стора с расширением redux, c промежуточным уровнем redux-thunk
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
