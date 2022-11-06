import axiosAuth from "./API/axios";

export async function getDetailActivity(id_group){
  try {
    const response = await axiosAuth.get(`/activity-groups/${id_group}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

// Used for update data
export async function getListItem(id_group){
  try {
    const response = await axiosAuth.get(`/todo-items?activity_group_id=${id_group}`);
    return response.data;
  } catch (error) {
   return error.response; 
  }
}
