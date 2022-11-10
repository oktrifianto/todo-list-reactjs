import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../Assets/Icons/close.svg';
import { AddListItem, getListItem } from '../../Services/item.services';
import SaveButton from '../Button/SaveButton';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

export default function ModalAddList({setLoading, setListItem, setAddItem, id_group}){
  // const [newList, setNewList] = useState({ title: "", priority: ""});
  const [listName, setListName ] = useState("");
  const [valPriority, setValPriority] = useState("");
  const [isOpenDropdown, setOpenDropdown] = useState(false);

  // const handleChange = e => {
  //   const newdata = {...newList};
  //   newdata[e.target.name] = e.target.value;
  //   console.log(newdata);
  //   setNewList(newdata);
  // }


  const createNewListItem = async (ln, pr) => {
    setLoading(true);
    setAddItem(false);
    // setNewList({title: ln, priority: pr});
    const result = await AddListItem(id_group, {title: ln, priority: pr});
    if (result.status === 201) {
      setTimeout(() => setLoading(false), 1000);
      const list = await getListItem(id_group);
      setListItem(list.data);
    } else {
      setLoading(false);
    }
  }

  // dropdown
  // const options = [
  //   'very-high', 'high', 'normal', 'low', 'very-low'
  // ];
  // const defaultOption = options[0];

  return (
    <>
    <div className="bg-black opacity-80 h-full w-full fixed top-0 left-0 z-51" onClick={() => setAddItem(false)}></div>
    <div tabIndex="-1"  className="overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50" style={{marginTop: "-600px"}}>
      <div className="relative w-full max-w-3xl h-full my-0 mx-auto">
        <div className="relative bg-white rounded-lg shadow flex items-center" style={{margin: "1.75rem auto"}} data-cy="modal-add">
          <div className="modal-content text-center w-full">
            <div className="modal-header flex justify-between p-5" style={{borderBottom: "1px solid #ccc"}}>
              <p className="text-left text-lg font-semibold">Tambahkan List Item</p>
              <CloseIcon className="cursor-pointer" onClick={() => setAddItem(false)} />
            </div>
            <div className="modal-body">
              <form className="p-8">
                <div className="mb-6">
                    <label data-cy="modal-add-name-title" className="text-left block mb-2 text-sm font-medium text-gray-900">NAMA LIST ITEM</label>
                    <input 
                      type="text" 
                      name="title" 
                      onChange={(e) => setListName(e.target.value)}
                      data-cy="modal-add-name-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tambahkan Nama List" required />
                </div>
                {/* <div className="mb-6">
                  <label forhtml="default" data-cy="modal-add-priority-title" className="block mb-2 text-sm font-medium text-gray-900 text-left">PRIORITY</label> */}
                  {/* <select
                    onChange={handleChange} 
                    name="priority" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option data-cy="modal-add-priority-item" value="select">Select Priority</option>
                      <option data-cy="modal-add-priority-item" value="very-high">Very High</option>
                      <option data-cy="modal-add-priority-item" value="high">High</option>
                      <option data-cy="modal-add-priority-item" value="normal">Normal</option>
                      <option data-cy="modal-add-priority-item" value="low">Low</option>
                      <option data-cy="modal-add-priority-item" value="very-low">Very Low</option>
                  </select> */}
                  {/* <Dropdown
                    data-cy="modal-add-priority-dropdown"
                    options={options} 
                    onChange={(item => setValPriority(item.value))} value={defaultOption} placeholder="Select an option" /> */}
                {/* </div> */}
                <div className="mb-6">
                  <label forhtml="default" data-cy="modal-add-priority-title" className="block mb-2 text-sm font-medium text-gray-900 text-left">PRIORITY</label>
                  <div className="dropdown">
                    <div onClick={() => setOpenDropdown(true)} data-cy="modal-add-priority-dropdown">Select Priority</div>
                    { isOpenDropdown ? 
                      (
                        <ul className="border" onClick={() => setOpenDropdown(false)} >
                          <li onClick={() => setValPriority('very-high')} data-cy="modal-add-priority-item">Very High</li>
                          <li onClick={() => setValPriority('high')} data-cy="modal-add-priority-item">High</li>
                          <li onClick={() => setValPriority('normal')} data-cy="modal-add-priority-item">Normal</li>
                          <li onClick={() => setValPriority('low')} data-cy="modal-add-priority-item">Low</li>
                          <li onClick={() => setValPriority('very-low')} data-cy="modal-add-priority-item">Very Low</li>
                        </ul>
                      ) : null
                    }
                  </div>
                </div>

                { listName } { " - "}
                { valPriority }

              </form>
            </div>
            <div className="modal-footer p-4 flex flex-row-reverse" style={{borderTop: "1px solid #ccc"}}>
              <SaveButton datacy="modal-add-save-button" className="text-right" hasClick={() => createNewListItem(listName, valPriority)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
