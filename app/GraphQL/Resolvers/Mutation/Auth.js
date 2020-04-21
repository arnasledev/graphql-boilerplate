import { validators } from "../../Middleware/Validators";
const { USER_ACCESS_TOKEN_EXPIRE, USER_ACCESS_TOKEN_SECRET } = process.env;

const Auth = {
  smsCode: async (root, { phone }) => {
    await validators.auth.smsCode(phone);

    // write code to send auth sms code
  },
  login: async (root, { phone, smsCode }) => {
    await validators.auth.login(phone, smsCode);

    // validate sms code and create new user or login existing user
  },
  revokeToken: async (root, { refreshToken }) => {
    // check if refresh token is valid
    // return new access and refresh tokens
  }
};

export default Auth;
