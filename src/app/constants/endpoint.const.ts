import { environment } from '../environments/environment';

const BASE_URL = environment.BASE_URL;

export const REFRESH_TOKEN = `${BASE_URL}/auth/refresh`;