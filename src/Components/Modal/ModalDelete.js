import { ReactComponent as AlertIcon } from '../../Assets/Icons/alert.svg';
import CancelButton from '../Button/CancelButton';
import DeleteButton from '../Button/DeleteButton';

export default function ModalDelete({hasDelete}){ // @see https://stackoverflow.com/a/66186184

  return (
    <div tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      {/* modal content */}
      <div className="relative pt-20 w-full max-w-lg h-full my-0 mx-auto md:h-auto">

        <div className="relative bg-white rounded-lg shadow flex items-center" style={{margin: "1.75rem auto"}}>
          {/* modal content */}
          <div className="modal-content p-6 text-center">
            <div className="modal-header">
              <AlertIcon className="mx-auto mt-4 mb-4 w-20 h-20" />
            </div>
            <div className="modal-body">
              <p className="mt-12 mb-12 text-lg font-normal text-gray-800">Apakah anda yakin menghapus activity <strong>"New Activity"</strong></p>
            </div>
            <div className="modal-footer">
              <CancelButton />
              <DeleteButton hasDelete={hasDelete} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
