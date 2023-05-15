// redux toolkit에서 제공하는 Store를 만들어주는 함수
import { configureStore } from '@reduxjs/toolkit';
// redux에서 제공하는 Reducer를 결합하는 함수
import { combineReducers } from 'redux';
// 생성한 reducer
import todos from './todos';

// Reducer들
const rootReducer = combineReducers({
  todos,
});

// 사용할 store
export const store = configureStore({
  reducer: rootReducer,
});