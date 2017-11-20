const logging = (state=[],action) => {
  if action.type == "LOGIN" {
    return [
      {
        loggedIn : true,
        auth_token : action.token
      }
    ]
  } else if action.type == "LOGOUT" {
    return [
      {
        loggedIn : false,
        auth_token : ''
      }
    ]
  }
}
