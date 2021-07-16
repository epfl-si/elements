import { combineReducers } from 'redux'

import { reducers as navigation } from './navigation/index'

export default function rootReduce () {
  return combineReducers({
    navigation
  })
}
