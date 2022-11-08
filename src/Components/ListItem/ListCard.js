import { ReactComponent as TrashIcon } from '../../Assets/Icons/trash.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import Indicator from '../Indicator/Indicator';
import { useState } from 'react';
import { updateStatusListItem } from '../../Services/item.services';

export default function ListCard({id, title, priority, is_active, setDeleteItem, setDelItemID}){
  const [isChecked, setIsChecked] = useState(false);
  const [isStreak, setIsStreak]   = useState(is_active === 0 ? true : false);

  const handleChange = async (event) => {
    if (event.target.checked) {
      const result = await updateStatusListItem(id, 0);
      if (result.status === 200) {
        setIsStreak(true);
      }
    } else {
      const result = await updateStatusListItem(id, 1);
      if (result.status === 200) {
        setIsStreak(false);
      }
    }
    setIsChecked(current => !current);
  }

  return (
    <div className="content-item flex justify-between p-7 mb-4 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="flex items-center">
        <input
          value={isChecked} 
          onChange={handleChange}
          type="checkbox"
          defaultChecked={is_active === 0 ? true : false}
          className="h-[24px] w-[24px] mr-4 rounded" />
        <Indicator priority={priority} />
        <span className={`mr-4 font-medium text-lg ${ isStreak ? 'line-through text-[#888]' : ''}`}>{title}</span>
        <EditIcon />
      </div>

      {/* trash icon */}
      <button data-cy="todo-item-delete-button" onClick={() => { setDeleteItem(true); setDelItemID(id) } }>
        <TrashIcon className="cursor-pointer" />
      </button>
    </div>
  );
}
