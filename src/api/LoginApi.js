import { api, getResponseData, escalateError } from "./index";

export default class LoginApi {
    // ENVIO LA DATA AL BACK

    //inicio de sesion
  static signIn(data) {
    
    const loginData = {
      userName: data.userName,
      password: data.password,
    };
    return api
      .post("admin/signIn", loginData)
      .then(getResponseData)
      .catch(escalateError);
  }
}
