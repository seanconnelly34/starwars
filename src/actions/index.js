export const SET_AVATAR = "SET_AVATAR";
export const SET_USERNAME = "SET_USERNAME";
export const SET_FAVORITES = "SET_FAVORITES";
export const REMOVE_FAVE = "REMOVE_FAVE";

export function setAvatar(avatar) {
  return {
    type: SET_AVATAR,
    avatar
  };
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  };
}

export function setFavorites(fave) {
  return {
    type: SET_FAVORITES,
    fave
  };
}

export function removeFave(name) {
  return {
    type: REMOVE_FAVE,
    name
  };
}
