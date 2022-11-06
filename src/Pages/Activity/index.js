import { useEffect, useState } from 'react';
import ActivityCard from '../../Components/Activity/ActivityCard';
import AddButton from '../../Components/Button/AddButton';
import EmptyActivity from '../../Components/Activity/EmptyActivity';
import { checkTotalActivity, createActivity, deleteActivity } from '../../Services/activity.services';
import ModalDelete from '../../Components/Modal/ModalDelete';

export default function Activity(){
  const [total, setTotal] = useState("");
  const [act, setAct] = useState({});
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [deletedId, setDeletedId] = useState('');

  useEffect(() => {
    checkTotalActivity().then( data => {
      setTotal(data.total);
      if (data.total > 0){
        setAct(data.data);
      }
    });
  }, [total]);

  const addActivity = async () => {
    const result = await createActivity();
    if (result.status === 201){
      checkTotalActivity().then(data => {
        setTotal(data.total);
        if (data.total > 0) {
          setAct(data.data);
        }
      });
    } 
  }

  const removeActivityGroup = async (id) => {
    const result = await deleteActivity(id);
    if (result.status === 200){
      setDeleteAlert(false);
      checkTotalActivity().then(data => {
        setTotal(data.total);
        if (data.total > 0) {
          setAct(data.data);
        }
      });
    }
  }
  
  return (
    <div className="container max-w-5xl my-0 mx-auto mt-5">
      {/* ------- todo header */}
      {/* berisi judul dan tombol tambah */}
      <div className="todo-header flex justify-between mt-12 mb-14">
        <h1 className="text-4xl font-bold">Activity</h1>
        <AddButton isClickButton={addActivity} />
      </div>
      {/* ------ todo content dashboard */}
      { total <= 0 ? <EmptyActivity /> : 
        <div className="dashboard-content flex flex-wrap">
          { act.map(activity => 
            <div key={activity.id}>
              <ActivityCard 
                id={activity.id} 
                title={activity.title} 
                date={activity.created_at} 
                setDeleteAlert={setDeleteAlert}
                setDeletedId={setDeletedId} />
            </div>)}
        </div>
      }

      { deleteAlert && <ModalDelete hasDelete={() => removeActivityGroup(deletedId)} />}
    </div>
  );
}
