import axios from "axios";

const API_BASE_URL =
  process.env.API_BASE_URL ||
  "https://neuefische-capstone-backend.herokuapp.com";

export const getAllNotes = (user) =>
  axios.get(`${API_BASE_URL}/api/notes`, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

export const getSingleNote = (user, noteId) =>
  axios.get(`${API_BASE_URL}/api/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

export const createSingleNote = (user, title, content) =>
  axios.post(
    `${API_BASE_URL}/api/notes`,
    { title, content },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );

export const updateSingleNote = (user, noteId, title, content) =>
  axios.put(
    `${API_BASE_URL}/api/notes/${noteId}`,
    { title, content },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );

export const deleteSingleNote = (user, noteId) =>
  axios.delete(`${API_BASE_URL}/api/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
