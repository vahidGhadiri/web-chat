import {SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "../../config/type";

const initialState = {
  email: "",
  password: "",
  username: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {...state, email: action.data}
    case SET_PASSWORD:
      return {...state, password: action.data}
    case SET_USERNAME:
      return {...state, username: action.data}

    default:
      return state
  }
}
