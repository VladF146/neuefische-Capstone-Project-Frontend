const API_BASE_URL =
  process.env.API_BASE_URL ||
  "https://neuefische-capstone-backend.herokuapp.com";

export const postSignin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/api/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return { response, data };
};

export const postSignup = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/api/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return { response, data };
};
