import { combineReducers } from 'redux'
import locationReducer from './location'
import coreReducer from './core'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    core: coreReducer,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
