export default function SaveButton({hasClick}){
  return (
    <button
      onClick={hasClick}
      type="button"
      className="text-white bg-[#16abf8] text-lg font-semibold rounded-full px-5 py-2.5 mr-2 mb-2 min-w-[170px] h-[54px]">
        Simpan
    </button>
  );
}
