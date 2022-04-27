import {createStore,applyMiddleware} from 'redux'
import rootReducer from './../reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer,applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(rootSaga);
store.dispatch({type: 'fetchTodos', payload: [] });
store.subscribe(()=>{
  console.log('store updated',store.getState()); 
})

export default store;