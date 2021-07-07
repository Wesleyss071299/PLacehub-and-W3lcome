import axios from 'axios';

import {IP} from '@env'

const api = axios.create({
  baseURL: `http://${IP}:3333/`
});

export default api;