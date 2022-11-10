import EmptyActivityImage from '../../Assets/Images/activity.png';

export default function EmptyActivity(){
  return (
    <div className="dashboard-content flex flex-wrap justify-center" data-cy="activity-empty-state">
      <img className="justify-items-center" src={EmptyActivityImage} alt="activity" />
    </div>
  );
}
