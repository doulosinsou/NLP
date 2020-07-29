import {validate} from "../src/client/js/callAPI"

describe("Filter function", () => {
test('is a valide url path', () => {
    const isUrl = "http://google.com";
    const notUrl = "http://google.c";
    expect(validate(isUrl)).toBeTruthy();
    expect(validate(notUrl)).toBeFalsy();
});
  });
