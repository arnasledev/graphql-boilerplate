import jwt from 'jsonwebtoken'
const accessTokenSecret = ""; // env value

const identifyUserByAccessToken = async (token, action) => {
  if (!token) {
    return {};
  }

  let user;
  try {
    user = await checkAccessTokenAccess(token);
  } catch (e) {
    return {};
  }

  if (user.blocked) {
    return {};
  }

  return { ...user };
};

const checkAccessTokenAccess = async token => {
  let data;
  try {
    data = await jwt.verify(token, accessTokenSecret);
  } catch (e) {
    return Promise.reject();
  }

  let user; // = await findUserById(data.id); // make this function valid

  if (!user) {
    return Promise.reject();
  }

  return Promise.resolve(user);
};

export { identifyUserByAccessToken };
