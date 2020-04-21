import AuthValidators from "./Auth";

const options = {
  abortEarly: false
};

const validators = {
  auth: {
    smsCode: phone =>
      AuthValidators.smsCodeValidation.validate({ phone }, options),
    login: (phone, smsCode) =>
      AuthValidators.authValidation.validate({ phone, smsCode }, options)
  }
};

export { validators };
