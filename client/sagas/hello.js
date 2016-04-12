
export function* watchHelloWorld() {
  // watching contact creation
  yield new Promise(resolve => setTimeout(resolve, 1000));
}
