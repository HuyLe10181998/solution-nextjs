function ButtonSave(){
    return     <button 
    type="submit" 
    className="group w-full mx-auto relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out"
  >
    <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-500 text-white duration-300 group-hover:translate-x-0">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
    <span className="ease absolute flex h-full w-full transform items-center justify-center text-blue-500 transition-all duration-300 group-hover:translate-x-full">
      Save
    </span>
    <span className="invisible relative">Save</span>
  </button>
}

export default ButtonSave;