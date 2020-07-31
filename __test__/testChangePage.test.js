import {mood} from "../src/client/js/changePage"

describe("test page change", () => {
test('body background color based on apiData', () => {
  const object = {};

  function makemood(mood){
    object.mood = mood;
    return object;
  }
  expect(mood(makemood("P"))).toBe(console.log('your mood is positive'));
  expect(mood(makemood("NEU"))).toBe(console.log('your mood is neutral'));
  expect(mood(makemood("N"))).toBe(console.log('your mood is negative'));
});
  });
