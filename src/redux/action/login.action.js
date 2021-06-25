import * as types from "../../config/type"

export const setEmail = (data = "") => ({type: types.SET_EMAIL, data})
export const setPassword = (data = "") => ({type: types.SET_PASSWORD, data})
export const setUsername = (data = "") => ({type: types.SET_USERNAME, data})
