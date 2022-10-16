import axios from "axios";

export const getActivity = async () => {
  try {
    return await axios.get(
      "https://todo.api.devcode.gethired.id/activity-groups"
    );
  } catch (error) {
    console.log("getActivity", error.message);
  }
};

export const postActivity = async (id) => {
  try {
    return await axios.post(
      `https://todo.api.devcode.gethired.id/activity-groups/`,
      {
        title: "New Activity --",
        email: "wow@gmail.com",
      }
    );
  } catch (error) {
    console.log("postActivity", error.message);
  }
};

export const delActivity = async (id) => {
  try {
    return await axios.delete(
      `https://todo.api.devcode.gethired.id/activity-groups/${id}`
    );
  } catch (error) {
    console.log("delActivity", error.message);
  }
};
