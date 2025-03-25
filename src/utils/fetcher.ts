import axios, { AxiosRequestConfig } from 'axios';

const fetcher = (url: string, configs?: AxiosRequestConfig) => async () => {
  const config: AxiosRequestConfig = { ...configs };

  const response = await axios.get(url, config);

  return response.data;
};

export default fetcher;
