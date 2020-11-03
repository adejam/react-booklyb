const token = {
  getToken() {
    return localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  },
  setToken(token) {
    return localStorage.setItem('token', JSON.stringify(token));
  },
  clearToken() {
    return localStorage.clear();
  },
};
export default token;
