import { useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../Assets/Icons/close.svg';
import { AddListItem, getListItem } from '../../Services/item.services';

export default function ModalAddList({setLoading, setListItem, setAddItem, id_group}){
  const [listName, setListName ] = useState("");
  const [valPriority, setValPriority] = useState("");
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (valPriority === "" || listName === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [isBtnDisabled, valPriority, listName])

  const createNewListItem = async (ln, pr) => {
    setLoading(true);
    setAddItem(false);
    const result = await AddListItem(id_group, {title: ln, priority: pr});
    if (result.status === 201) {
      setTimeout(() => setLoading(false), 300);
      const list = await getListItem(id_group);
      setListItem(list.data);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
    <div className="bg-black opacity-80 h-full w-full fixed top-0 left-0 z-51" onClick={() => setAddItem(false)}></div>
    <div tabIndex="-1" className="overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50">
      <div className="fixed top-[50%] left-[50%] max-w-3xl my-0 mx-auto" style={{marginTop: "-180px", marginLeft: "-400px"}}>
        <div className="relative bg-white rounded-lg shadow flex items-center w-[820px]" style={{margin: "1.75rem auto"}} data-cy="modal-add">
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
                <div className="mb-6">
                  <label forhtml="default" data-cy="modal-add-priority-title" className="block mb-2 text-sm font-medium text-gray-900 text-left">PRIORITY</label>
                  <div className="dropdown relative w-[205px] p-2 border cursor-pointer" style={{borderRadius: "5px"}}>
                    {/* like button */}
                    <div onClick={() => setOpenDropdown(true)} data-cy="modal-add-priority-dropdown">
                      { ( valPriority === 'very-high' ? (<div><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#ed4c5c]"></span>Very High</div>) 
                        : valPriority === 'high' ? (<div><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#f8a541]"></span>High</div>)
                        : valPriority === 'normal' ? (<div><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#00a790]"></span>Normal</div>)
                        : valPriority === 'low' ? (<div><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#428bc1]"></span>Low</div>) 
                        : valPriority === 'very-low' ? (<div><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#8942c1]"></span>Very Low</div>)
                        : '') || 'Select Priority '}
                    </div>
                    {/* dropdown content */}
                    { isOpenDropdown ? 
                      (
                        <ul className="text-left mt-3 absolute border bg-white" onClick={() => setOpenDropdown(false)} >
                          <li onClick={() => setValPriority('very-high')} data-cy="modal-add-priority-item" className="border px-8 py-2 cursor-pointer hover:text-white hover:bg-blue-400"><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#ed4c5c]"></span>Very High</li>
                          <li onClick={() => setValPriority('high')} data-cy="modal-add-priority-item" className="border px-8 py-2 cursor-pointer hover:text-white hover:bg-blue-400"><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#f8a541]"></span>High</li>
                          <li onClick={() => setValPriority('normal')} data-cy="modal-add-priority-item" className="border px-8 py-2 cursor-pointer hover:text-white hover:bg-blue-400"><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#00a790]"></span>Normal</li>
                          <li onClick={() => setValPriority('low')} data-cy="modal-add-priority-item" className="border px-8 py-2 cursor-pointer hover:text-white hover:bg-blue-400"><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#428bc1]"></span>Low</li>
                          <li onClick={() => setValPriority('very-low')} data-cy="modal-add-priority-item" className="border px-8 py-2 cursor-pointer hover:text-white hover:bg-blue-400"><span className="inline-flex items-center p-[7px] mr-4 text-sm font-semibold rounded-full bg-[#8942c1]"></span>Very Low</li>
                        </ul>
                      ) : null
                    }
                  </div>
                </div>

              </form>
            </div>
            <div className="modal-footer p-4 flex flex-row-reverse" style={{borderTop: "1px solid #ccc"}}>
              { !isBtnDisabled ? 
                ( 
                  <button
                      type="button"
                      data-cy="modal-add-save-button"
                      onClick={() => createNewListItem(listName, valPriority)}
                      className="cursor-pointer text-white bg-[#16abf8] text-lg font-semibold rounded-full px-5 py-2.5 mr-2 mb-2 min-w-[170px] h-[54px]"
                    >
                      Simpan
                    </button> 
                ) : 
                ( 
                  <button
                      disabled
                      type="button"
                      data-cy="modal-add-save-button"
                      className="text-white bg-[#16abf8] opacity-50 text-lg font-semibold rounded-full px-5 py-2.5 mr-2 mb-2 min-w-[170px] h-[54px]"
                    >
                      Simpan
                    </button> 
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
