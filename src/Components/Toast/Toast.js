import { ReactComponent as AlertSuccess } from '../../Assets/Icons/alert-success.svg';

export default function ToastSuccess() {
  return (
    <div tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="relative pt-24 w-full max-w-lg h-full my-0 mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow flex items-center mt-20">
          <div className="modal-content p-6 text-center">
            <div className="modal-body flex items-center">
              <span><AlertSuccess /></span>
              <p className="ml-4 mt-0.75 mb-0.75 text-lg font-normal text-gray-800">Aktivitas berhasil di hapus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
