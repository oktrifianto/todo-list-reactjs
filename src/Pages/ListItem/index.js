import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from '../../Assets/Icons/back.svg';
import { ReactComponent as EditIcon } from '../../Assets/Icons/edit.svg';
import { ReactComponent as SortIcon } from '../../Assets/Icons/sort.svg';
import { ReactComponent as SIconNewest } from '../../Assets/Icons/sort-newest.svg';
import { ReactComponent as SIconOldest } from '../../Assets/Icons/sort-oldest.svg';
import { ReactComponent as SIconAsc} from '../../Assets/Icons/sort-a-alpha.svg';
import { ReactComponent as SIconDsc} from '../../Assets/Icons/sort-d-alpha.svg';
import { ReactComponent as SIconActive} from '../../Assets/Icons/sort-active.svg';
import Spinner from "../../Components/Spinner/Spinner";
import AddButton from "../../Components/Button/AddButton";
import ListCard from "../../Components/ListItem/ListCard";
import ModalDelete from "../../Components/Modal/ModalDelete";
import ModalAddList from "../../Components/Modal/ModalAddList";
import EmptyListItem from '../../Components/ListItem/EmptyListItem';
import { updateActivityTitle } from "../../Services/activity.services";
import { deleteListItem, getDetailActivity, getListItem } from "../../Services/item.services";

export default function ListItem(){
  const { id } = useParams();
  const [listItem, setListItem]   = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [delItemID, setDelItemID] = useState('');
  const [addItem, setAddItem] = useState(false);
  const [cTitle, setCTitle] = useState(true);
  const [isOpenSort, setOpenSort] = useState(false);
  const [isSortedList, setSortedList] = useState([]); // new sorted data
  const [isSorted, setSorted] = useState(false); // to check state have been sorted.

  useEffect(() => {
    setLoading(true);
    const fetchActivity = async (id) => {
      const result = await getDetailActivity(id);
      if (result.todo_items.length > 0){
        setListItem(result.todo_items);
        setTitle(result.title);
        setTimeout(() => setLoading(false), 500);
      } else {
        setListItem([]);
        setTitle(result.title);
        setTimeout(() => setLoading(false), 500);
      }
    }

    fetchActivity(id).catch(console.error);
  }, [id, isSorted]);

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

  const changeTitle = async (e) => {
    const result = await updateActivityTitle(id, e.target.value);
    if (result.status === 200) {
      setTitle(e.target.value);
    }
  }

  const sortByOldest = async () => {
    const sortData = listItem.sort((a, b) => a.id - b.id);
    setSortedList(sortData);
  }

  const sortByNewest = async () => {
    const sortData = listItem.sort((a, b) =>  b.id - a.id);
    setSortedList(sortData);
  }

  const sortByAZ = async () => {
    const sortData = listItem.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setSortedList(sortData);
  }

  const sortByZA = async () => {
    const sortData = listItem.sort((a, b) => b.title.localeCompare(a.title));
    setSortedList(sortData);
  }

  const sortIsActive = async () => {
    getDetailActivity(id).then((data) => {
      const item = data.todo_items;
      const sortData = item.sort((a, b) => b.is_active - a.is_active);
      setSortedList(sortData);
    });
    // data = data.todo_items;
    // const sortData = data.filter( x => x.is_active === 1 );
    // setSortedList(sortData);
    // const sortData = isSortedList.sort((a, b) => b.is_active - a.is_active);
    // setSortedList(sortData);
  }

  return (
    <div className="container max-w-5xl my-0 mx-auto mt-5">
      <div className="todo-header flex justify-between mt-12 mb-14">
        <div className="todo-title flex items-center">
          <Link to="/"><BackIcon className="mr-4 w-8 h-8" data-cy="todo-back-button"/></Link>
          { cTitle ? 
            (
              <h1 className="text-4xl font-bold" 
                data-cy="todo-title" 
                onClick={() => setCTitle(false)}
              >{title}</h1>
            ) : (
              <input autoFocus 
                type="text"
                className="text-4xl font-bold"
                onClick={() => setCTitle(true)}
                onBlur={(e) => {changeTitle(e); setCTitle(true)}}
                defaultValue={title} />
            )
          }
          <EditIcon className="ml-8 w-6 h-6 cursor-pointer" data-cy="todo-title-edit-button" onClick={() => setCTitle(false)} />
        </div>
        <div className="flex">
          <div className="dropdown relative">
            <button data-cy="todo-sort-button" className="rounded-full border h-[54px] w-[54px] mr-6" onClick={() => setOpenSort(open => !open)}>
              <SortIcon className="h-6 w-6 inline-block" />
            </button>

            { isOpenSort && (
                <div className="absolute">
                  <div className="mt-1 w-[235px]">
                    <div data-cy="sort-selection" className="bg-white cursor-pointer hover:bg-slate-200" onClick={() => { setOpenSort(false); setSorted(true)} } style={{padding: "0", height: "52px", border: "1px solid #ccc", borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
                      <div className="flex py-3 px-6" onClick={() => sortByNewest()}>
                        <SIconNewest data-cy="sort-selection-icon" className="h-6 w-6" />
                        <span data-cy="sort-selection-title" className="ml-4">Terbaru</span>
                      </div>
                    </div>
                    <div data-cy="sort-selection" className="bg-white cursor-pointer hover:bg-slate-200" onClick={() => { setOpenSort(false); setSorted(true)} } style={{padding: "0", height: "52px", border: "1px solid #ccc"}}>
                      <div className="flex py-3 px-6" onClick={() => sortByOldest()}>
                          <SIconOldest className="h-6 w-6" />
                          <span className="ml-4">Terlama</span>
                      </div>
                    </div>
                    <div data-cy="sort-selection" className="bg-white cursor-pointer hover:bg-slate-200" onClick={() => { setOpenSort(false); setSorted(true)} } style={{padding: "0", height: "52px", border: "1px solid #ccc"}}>
                      <div className="flex py-3 px-6" onClick={() => sortByAZ()}>
                          <SIconAsc className="h-6 w-6" />
                          <span className="ml-4">A - Z</span>
                      </div>
                    </div>
                    <div data-cy="sort-selection" className="bg-white cursor-pointer hover:bg-slate-200" onClick={() => { setOpenSort(false); setSorted(true)} } style={{padding: "0", height: "52px", border: "1px solid #ccc"}}>
                      <div className="flex py-3 px-6" onClick={() => sortByZA()}>
                          <SIconDsc className="h-6 w-6" />
                          <span className="ml-4">Z - A</span>
                      </div>
                    </div>
                    <div data-cy="sort-selection" className="bg-white cursor-pointer hover:bg-slate-200" onClick={() => { setOpenSort(false); setSorted(true)} } style={{padding: "0", height: "52px", border: "1px solid #ccc"}}>
                      <div className="flex py-3 px-6" onClick={() => sortIsActive()}>
                          <SIconActive className="h-6 w-6" />
                          <span className="ml-4">Belum Selesai</span>
                      </div>
                    </div>
                  </div>
                </div>
            )}
          </div>
          <AddButton isClickButton={() => setAddItem(true)} datacy="todo-add-button" />
        </div>
      </div>
      
      { (!loading && !isSorted) &&
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
                setDelItemID={setDelItemID}
                setSortedList={setSortedList} />
              </div>
            )}
        </div>
      }

      { (!loading && isSorted) && 
          <div className="detail-content">
            { isSortedList.length <= 0 && <EmptyListItem /> }
            { isSortedList.length > 0 && isSortedList.map( item => 
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
          setDeleteAlert={setDeleteItem}
          hasCancel={() => setDeleteItem(false)}
          hasDelete={() => removeListItem(delItemID)}/>}
      { loading && <Spinner />}
      { addItem && <ModalAddList setAddItem={setAddItem} id_group={id} setListItem={setListItem} setLoading={setLoading} /> }
      <div data-cy="modal-information"></div>
    </div>
  );
}
