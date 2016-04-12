import { fork } from 'redux-saga/effects';
import { watchHelloWorld } from './hello';

export default function* rootSaga() {
  yield [
    fork(watchHelloWorld)
  ];
}
