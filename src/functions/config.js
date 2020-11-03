import token from './token';

const getCurrentToken = token.getToken();
const config = { headers: { Authorization: `Bearer ${getCurrentToken}` } };

export default config;
