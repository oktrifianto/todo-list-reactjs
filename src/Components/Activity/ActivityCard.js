import { Link } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '../../Assets/Icons/trash.svg';

export default function ActivityCard({id, title, date, setDeleteAlert, setDeletedId}){
  let parseDate = date.split("T")[0];
  parseDate = new Date(parseDate).toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});

  return (
    <>
      <div className="p-6 mr-5 mb-7 w-[235px] h-[235px] bg-white rounded-xl border border-gray-200 shadow-md">
        <Link to={`detail/${id}`}>
          <div className="activity-body h-[158px] cursor-ponter">
            <h5 className="mb-2 text-lg font-bold text-gray-900">{title}</h5>
          </div>
        </Link>
        <div className="activity-footer flex justify-between">
          <span className="text-[#888888] text-sm">{parseDate}</span>
          <button onClick={() => { setDeleteAlert(true); setDeletedId(id) } }>
            <TrashIcon className="cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
}
