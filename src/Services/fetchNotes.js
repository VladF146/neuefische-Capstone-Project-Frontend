const API_BASE_URL =
  process.env.API_BASE_URL ||
  "https://neuefische-capstone-backend.herokuapp.com";

export const getAllNotes = async (user) => {
  const response = await fetch(`${API_BASE_URL}/api/notes`, {
    headers: { Authorization: `Bearer ${user?.token}` },
  });
  const data = await response.json();
  return { response, data };
};

export const getSingleNote = async (user, noteId) => {
  const response = await fetch(`${API_BASE_URL}/api/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${user?.token}` },
  });
  const data = await response.json();
  return { response, data };
};

export const createSingleNote = async (user, title, content) => {
  const response = await fetch(`${API_BASE_URL}/api/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  return { response, data };
};

export const updateSingleNote = async (user, noteId, title, content) => {
  const response = await fetch(`${API_BASE_URL}/api/notes/${noteId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  return { response, data };
};

export const deleteSingleNote = async (user, noteId) => {
  const response = await fetch(`${API_BASE_URL}/api/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  const data = await response.json();
  return { response, data };
};
