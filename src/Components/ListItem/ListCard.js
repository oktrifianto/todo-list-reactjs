import { ReactComponent as TrashIcon } from '../../Assets/Icons/trash.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import Indicator from '../Indicator/Indicator';
import { useState } from 'react';
import { updateStatusListItem } from '../../Services/item.services';

export default function ListCard({id, title, priority, is_active, setDeleteItem, setDelItemID}){
  const [isChecked, setIsChecked] = useState(false);
  const [isStreak, setIsStreak]   = useState((is_active) => is_active === 1 ? 1 : 0);

  const handleChange = async (event) => {
    if (event.target.checked) {
      // centang 0 ... ini done --- not active
      const result = await updateStatusListItem(id, 0);
      // console.log(result);
      if (result.status === 200) {
        setIsStreak(true);
      }
    } else {
      // uncentang .... active list
      const result = await updateStatusListItem(id, 1);
      if (result.status === 200) {
        setIsStreak(false);
      }
    }
    setIsChecked(current => !current);
  }

  return (
    <div className="content-item flex justify-between p-7 mb-4 bg-white rounded-xl border border-gray-200 shadow-md">
      {/*properi value */}
      <div className="flex items-center">
        <input
          value={isChecked} 
          onChange={handleChange}
          type="checkbox" 
          className="h-[24px] w-[24px] mr-4 rounded" />
        <Indicator priority={priority} />
        { !isStreak ? 
          <span className="mr-4 font-medium text-lg">{title}</span> :
          <span className="mr-4 font-medium text-lg" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{title}</span>
        }
        <EditIcon />
      </div>

      {/* trash icon */}
      <button onClick={() => { setDeleteItem(true); setDelItemID(id) } }>
        <TrashIcon className="cursor-pointer" />
      </button>
      {/* { isStreak && <p>{isStreak}</p> } */}
    </div>
  );
}
