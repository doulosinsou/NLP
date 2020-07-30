import {validate} from "../src/client/js/callAPI"

describe("Filter function", () => {
test('is a valide url path', () => {
    const isUrl = "http://google.com";
    expect(validate(isUrl)).toBeTruthy();
});
  });
