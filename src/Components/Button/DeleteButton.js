export default function DeleteButton({hasDelete}){
  return (
    <button
      onClick={hasDelete}
      type="button"
      className="text-white w-[150px] h-[54px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-full text-lg items-center px-5 py-2.5">Hapus 
    </button>
  );
}
