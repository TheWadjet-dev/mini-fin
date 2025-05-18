import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });

export const fetchCarros = () => API.get('/carros');
export const fetchPujas = (carroId) => API.get(`/pujas?carroId=${carroId}`);
export const createPuja = (data) => API.post('/pujas', data);
export const verifyPago = (data) => API.post('/pago', data);
export const fetchCliente = (wallet) => API.get(`/clientes?wallet=${wallet}`);
