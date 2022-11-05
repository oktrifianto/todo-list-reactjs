import axiosAuth from "./API/axios";

export async function checkTotalActivity(){
  try {
    const response = await axiosAuth.get(`/activity-groups?email=${process.env.REACT_APP_EMAIL_ENCODE}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function createActivity(){
  try {
    const response = await axiosAuth.post(`/activity-groups`, {
      title: "New Activity",
      email: process.env.REACT_APP_EMAIL
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
