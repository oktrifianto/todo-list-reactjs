import { ReactComponent as CloseIcon } from '../../Assets/Icons/close.svg';
import SaveButton from '../Button/SaveButton';

export default function ModalAddList({setAddItem}){
  return (
    <div tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="relative pt-20 w-full max-w-3xl h-full my-0 mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow flex items-center" style={{margin: "1.75rem auto"}}>
          <div className="modal-content text-center w-full">
            <div className="modal-header flex justify-between p-5" style={{borderBottom: "1px solid #ccc"}}>
              <p className="text-left text-lg font-semibold">Tambahkan List Item</p>
              <CloseIcon className="cursor-pointer" onClick={() => setAddItem(false)} />
            </div>
            <div className="modal-body">
              <form className="p-8"> {/* https://flowbite.com/docs/components/forms/#default-form*/}
                <div className="mb-6">
                    <label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900">NAMA LIST ITEM</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tambahkan Nama List" required />
                  </div>
                  <div className="mb-6">
                    {/* <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900">PRIORITY</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required /> */}
                    
                  </div>


                </form>
            </div>
            <div className="modal-footer p-4 flex flex-row-reverse" style={{borderTop: "1px solid #ccc"}}>
              <SaveButton className="text-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
