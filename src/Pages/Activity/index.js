// import EmptyActivityImage from '../../Assets/Images/activity.png';
import { Link } from 'react-router-dom';
import ActivityCard from '../../Components/Activity/ActivityCard';
import AddButton from '../../Components/Button/AddButton';

// todo : useEffect to load data
// jika total < 0 === load image 
// else ... load data

export default function Activity(){
  return (
    <div className="container max-w-5xl my-0 mx-auto mt-5">
      {/* ------- todo header */}
      {/* berisi judul dan tombol tambah */}
      <div className="todo-header flex justify-between mt-12 mb-14">
        <h1 className="text-4xl font-bold">Activity</h1>
        <AddButton />
      </div>
      {/* ------ todo content dashboard */}
      <div className="dashboard-content flex flex-wrap">
        <Link to="detail/10029" ><ActivityCard /></Link>
        <Link to="detail/10029" ><ActivityCard /></Link>
        <Link to="detail/10029" ><ActivityCard /></Link>
        <Link to="detail/10029" ><ActivityCard /></Link>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      {/* <div className="dashboard-content flex flex-wrap justify-center">
        <img className="justify-items-center" src={EmptyActivityImage} alt="activity" />
      </div> */}
    </div>
  );
}
