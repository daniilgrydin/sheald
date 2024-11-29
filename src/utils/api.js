import axios from "axios";

const BASE_URL = "https://acres-server-production.up.railway.app";

export const fetchWorkers = async () => {
  const response = await axios.get(`${BASE_URL}/employees`);
  return response.data;
};

export const fetchRecent = async (fullName) => {
  const response = await axios.get(`${BASE_URL}/employees/entries/most-recent`, {
    data: { name: fullName },
  });
  return response.data;
};

export const fetchWorkerDetails = async (fullName) => {
  const response = await axios.get(`${BASE_URL}/employees/entries`, {
    params: { name: fullName },
  });
  return response.data;
};

// import fs from 'fs';
// import path from 'path';

// const dataPath = path.resolve(__dirname, '../data/example.json');

// const readData = () => {
//   const rawData = fs.readFileSync(dataPath);
//   return JSON.parse(rawData);
// };

// export const fetchWorkers = async () => {
//   const data = readData();
//   return data.map(worker => {
//     const latestEntry = worker.entries[worker.entries.length - 1];
//     return { name: worker.name, ...latestEntry };
//   });
// };

// export const fetchRecent = async (fullName) => {
//   const data = readData();
//   const worker = data.find(worker => worker.name === fullName);
//   if (worker) {
//     return worker.entries[worker.entries.length - 1];
//   }
//   return null;
// };

// export const fetchWorkerDetails = async (fullName) => {
//   const data = readData();
//   const worker = data.find(worker => worker.name === fullName);
//   if (worker) {
//     return worker.entries;
//   }
//   return null;
// };
