// TODO: write your code here
import json from './parser';
import read from './reader';

export default async function load() {
  try {
    let data = await read();
    let value = await json(data);
    return value;
  }
  catch(e) {
    console.log(e);
  }
}


load().then((saving) => {
  result = saving;
  console.log(result);
})