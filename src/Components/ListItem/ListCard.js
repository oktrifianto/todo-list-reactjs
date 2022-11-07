import { ReactComponent as TrashIcon } from '../../Assets/Icons/trash.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import Indicator from '../Indicator/Indicator';

export default function ListCard({id, title, priority, is_active, setDeleteItem, setDelItemID}){
  return (
    <div className="content-item flex justify-between p-7 mb-4 bg-white rounded-xl border border-gray-200 shadow-md">
      {/*properi value */}
      <div className="flex items-center">
        <input type="checkbox" className="h-[24px] w-[24px] mr-4 rounded" style={{
          backgroundColor: '#16abf8',
          borderColor: '#16abf8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '20px',
          border: '1px solid #c7c7c7',
          backgroundImage: "background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E')"

        }}/>
        <Indicator priority={priority} />
        <span className="mr-4 font-medium text-lg">{title}</span>
        <EditIcon />
      </div>

      {/* trash icon */}
      <button onClick={() => { setDeleteItem(true); setDelItemID(id) } }>
        <TrashIcon className="cursor-pointer" />
      </button>
    </div>
  );
}
