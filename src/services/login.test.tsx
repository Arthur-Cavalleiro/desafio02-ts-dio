import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "art@gmail.com";

  it("Deve exibir um alert com boas vindas", () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`bem vinda ${mockEmail}`);
  });

  it("Não deve exibir um alert com boas vindas sem o email", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith(`bem vinda`);
  });
});
