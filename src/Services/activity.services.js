import axiosAuth from "./API/axios";

export async function checkTotalActivity(){
  try {
    const response = await axiosAuth.get(`/activity-groups?email=${process.env.REACT_APP_EMAIL_ENCODE}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
