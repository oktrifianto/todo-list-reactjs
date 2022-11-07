export default function CancelButton({hasCancel}){
  return (
    <button
      onClick={hasCancel}
      type="button" 
      className="text-gray-500 w-[150px] h-[54px] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full border border-gray-200 text-lg font-semibold px-5 py-2.5 hover:text-gray-900 focus:z-10 mr-2">
        Batal
    </button>
  );
}
