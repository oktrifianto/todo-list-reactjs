import { ReactComponent as AddIcon } from '../../Assets/Icons/plus.svg';

export default function AddButton(){
  return (
    <button 
      type="button"
      className="text-white bg-[#16abf8] text-lg font-semibold rounded-full px-5 py-2.5 mr-2 mb-2 min-w-[170px] h-[54px]">
        <span><AddIcon style={{display: "inline-block"}} /></span> {/* switch to loading button when call API */}
          Tambah
    </button>
  );
}
