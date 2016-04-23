export function* watchHelloWorld() {
  yield new Promise(resolve => setTimeout(resolve, 1000));
}
