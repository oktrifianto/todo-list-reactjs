import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from '../../Assets/Icons/back.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import { ReactComponent as SortIcon } from '../../Assets/Icons/sort.svg';
import EmptyListItem from '../../Components/ListItem/EmptyListItem';
import AddButton from "../../Components/Button/AddButton";
import { getListItem } from "../../Services/item.services";

export default function ListItem(){
  const { id } = useParams(); // activity_group_ID
  const [listItem, setListItem]   = useState([]);

  // render data using useEffect
  useEffect(() => {
    getListItem(id).then(result => {
      if (result.total > 0){
        setListItem(result.data);
      } else {
        setListItem([]); // no data
      }
    });
  }, [id]);


  return (
    <div className="container max-w-5xl my-0 mx-auto mt-5">
      {/* ---- todo header */}
      <div className="todo-header flex justify-between mt-12 mb-14">
        <div className="todo-title flex items-center">
          <Link to="/"><BackIcon className="mr-4 w-8 h-8"/></Link>
          <h1 className="text-4xl font-bold">Name from Activity</h1>
          <EditIcon className="ml-8 w-6 h-6"/>
        </div>
        <div className="flex">
          <div className="dropdown">
            <button className="rounded-full border h-[54px] w-[54px] mr-6">
              <SortIcon className="h-6 w-6 inline-block"/>
            </button>
          </div>
          <AddButton />
        </div>
      </div>
      
      {/* --- content --- */}
      <div className="item-content">
        <div className="empty-item flex justify-center">
          { listItem.length <= 0 && <EmptyListItem /> }
          { listItem.length > 0 && listItem.map( item => 
            <div key={item.id}><p>{item.title}</p></div>
          )}
        </div>
      </div>
    </div>
  );
}
