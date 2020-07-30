import {mood} from "../src/client/js/changePage"

describe("test page change", () => {
test('body background color based on apiData', () => {
  const object = {};

  function makemood(mood){
    object.mood = mood;
    return object;
  }
  expect(mood(makemood("business"))).toBe(console.log('your mood is business'));
  expect(mood(makemood("academnic"))).toBe(console.log('your mood is academic'));
  expect(mood(makemood("casual"))).toBe(console.log('your mood is casual'));
});
  });
