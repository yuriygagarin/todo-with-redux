import { combineReducers } from 'redux'
import dataReducer, * as fromData from './data'
import lookupReducer, * as fromLookup from './lookup'

const initialFetch = (state = true, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
    case 'FETCH_ITEMS_ERROR':
      return false
    default:
      return state
  }
}

const todos = combineReducers({
  data: dataReducer,
  lookup: lookupReducer,
  initialFetch
})

export default todos

export const getFilteredTodos = (state, filter) => {
  const ids = fromLookup.getIds(state.lookup, filter)
  return ids.map(id => fromData.getItem(state.data, id))
}

export const getIsFetching = (state, filter) =>
  state.lookup[filter].isFetching

export const getIsFetchingSomething = state =>
  getIsFetching(state, 'all') || getIsFetching(state, 'active') || getIsFetching(state, 'completed')

export const getErrorMessage = (state, filter) =>
  state.lookup[filter].errorMessage

export const getIsInitialFetch = (state) =>
  state.initialFetch