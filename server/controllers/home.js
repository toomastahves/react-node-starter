
export function* getHome() {
  console.log('Home content request');
  this.body = { message: 'Home content' };
}
