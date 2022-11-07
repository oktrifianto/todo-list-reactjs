import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from '../../Assets/Icons/back.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import { ReactComponent as SortIcon } from '../../Assets/Icons/sort.svg';
import EmptyListItem from '../../Components/ListItem/EmptyListItem';
import AddButton from "../../Components/Button/AddButton";
import { deleteListItem, getDetailActivity, getListItem } from "../../Services/item.services";
import ListCard from "../../Components/ListItem/ListCard";
import Spinner from "../../Components/Spinner/Spinner";
import ModalDelete from "../../Components/Modal/ModalDelete";
import ModalAddList from "../../Components/Modal/ModalAddList";

export default function ListItem(){
  const { id } = useParams(); // activity_group_ID
  const [listItem, setListItem]   = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [delItemID, setDelItemID] = useState('');
  const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchActivity = async (id) => {
      const result = await getDetailActivity(id);
      if (result.todo_items.length > 0){
        setListItem(result.todo_items);
        setTitle(result.title);
        setTimeout(() => setLoading(false), 1000);
      } else {
        setListItem([]);
        setTimeout(() => setLoading(false), 1000);
      }
    }

    fetchActivity(id).catch(console.error);
  }, [id]);

  const removeListItem = async (item_id) => {
    const result = await deleteListItem(item_id);
    if (result.status === 200) {
      setDeleteItem(false);
      const listItemData = await getListItem(id);
      if (listItemData.data.length > 0){
        setListItem(listItemData.data);
      }
    }
  }

  const addNewListItem = async () => {
    // console.log('hehehehe');
    setAddItem(true); // create modal opened
    // form ... 
  }

  return (
    <div className="container max-w-5xl my-0 mx-auto mt-5">
      {/* ---- todo header */}
      <div className="todo-header flex justify-between mt-12 mb-14">
        <div className="todo-title flex items-center">
          <Link to="/"><BackIcon className="mr-4 w-8 h-8"/></Link>
          <h1 className="text-4xl font-bold">{title || 'New Activity'}</h1>
          <EditIcon className="ml-8 w-6 h-6"/>
        </div>
        <div className="flex">
          <div className="dropdown">
            <button className="rounded-full border h-[54px] w-[54px] mr-6">
              <SortIcon className="h-6 w-6 inline-block"/>
            </button>
          </div>
          <AddButton isClickButton={addNewListItem} />
        </div>
      </div>
      
      {/* --- content --- */}
      { !loading && 
        <div className="detail-content">
          { listItem.length <= 0 && <EmptyListItem /> }
          { listItem.length > 0 && listItem.map( item => 
            <div key={item.id}>
              <ListCard
                id={item.id}
                title={item.title}
                priority={item.priority}
                is_active={item.is_active}
                setDeleteItem={setDeleteItem}
                setDelItemID={setDelItemID} />
              </div>
            )}
        </div>
      }

      { deleteItem && <ModalDelete 
          typeName="item"
          hasCancel={() => setDeleteItem(false)}
          hasDelete={() => removeListItem(delItemID)}/>}
      { loading && <Spinner />}
      { addItem && <ModalAddList setAddItem={setAddItem}/> }
    </div>
  );
}
