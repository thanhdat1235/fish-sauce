// const API_URL = "http://localhost:4001";
const API_URL = "http://localhost:1337/api";
const CHAT_API_URL = "http://localhost:4002";
const REGISTER_URL = `${API_URL}/users`;
const REFRESH_TOKEN_URL = `${API_URL}/auth/refresh-token`;
const LOGIN_URL = `${API_URL}/auth/login`;
const FIND_ACTIVE_USER = `${API_URL}/users`;
const UPDATE_USER_URL = `${API_URL}/users/`;
const UPLOAD_URL = `${API_URL}/upload`;
const UPDATE_AVATAR_URL = `${API_URL}/upload`;
const GET_ALL_PRODUCT = `${API_URL}/products`;
const FIND_BY_SLUG = `${API_URL}/products?populate=*&filters[slug][$eq]=`;
const FIND_BLOG_BY_CAT = `${API_URL}/blogs?filters[$and][0][category][id][$eq]=`;
const GET_ALL_CAT = `${API_URL}/categories`;

export {
  CHAT_API_URL,
  API_URL,
  REFRESH_TOKEN_URL,
  LOGIN_URL,
  REGISTER_URL,
  FIND_ACTIVE_USER,
  UPDATE_USER_URL,
  UPLOAD_URL,
  UPDATE_AVATAR_URL,
  GET_ALL_PRODUCT,
  FIND_BY_SLUG,
  FIND_BLOG_BY_CAT,
  GET_ALL_CAT
};
