
export function* getHome() {
  console.log('Home request');
  this.body = { message: 'Home content' };
}

export function* getAbout() {
  console.log('About request');
  this.body = { message: 'About content' };
}
