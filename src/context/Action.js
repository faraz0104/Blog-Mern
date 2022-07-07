export const LoginStart =(userCredentials)=>({
    type:"LOGIN_START",
});

export const LoginSuccess = (user) => ({ // it gonna return user information
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  export const Logout = () => ({
    type: "LOGOUT",
  });