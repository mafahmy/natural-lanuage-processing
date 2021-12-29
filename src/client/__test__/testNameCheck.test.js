import { checkForName } from "../js/nameChecker";
describe("Testing url validaty", () => {
  test("url function existance", () => {
    expect(checkForName).toBeDefined();
  });

  test("Valid url return true", () => {
    expect(checkForName("http://mah.com")).toBeTruthy();
  });
  test("Invalid url return false", () => {
    expect(checkForName("heliu")).toBeFalsy();
  });
});
