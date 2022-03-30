import { useEffect, useState } from 'react';
import api from '../services/api';

export const useAxios = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);

  return data;
}

export const UseAxiosPost = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.post(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);

  return data;
}
export const useAxiosPut = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.put(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);

  return data;
}
export const useAxiosDelete = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.delete(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [url]);

  return data;
}

