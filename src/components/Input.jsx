import React, {useRef} from 'react'
import { AiOutlineEnter } from "react-icons/ai";
export const Input = (props) => {
  const inputRef = useRef(null);

  return (
    <div className='w-full px-3'>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          ref={inputRef}
          onKeyDown={(e)=> {if(e.key === 'Enter'){props.addNew(inputRef.current.value);inputRef.current.value=''}}}
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 
          text-gray-900 ring-1 ring-inset ring-gray-300 
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:ring-indigo-300 sm:text-sm sm:leading-6 outline-0 
          placeholder:text-slate-300 text-slate-600"
          placeholder="New task..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <button 
          onClick={()=> {props.addNew(inputRef.current.value);inputRef.current.value=''}}
          className="h-full rounded-md border-0 bg-transparent py-2 
          pl-2 pr-2 text-gray-500 sm:text-sm hover:bg-slate-200"
          >
            <AiOutlineEnter />
          </button>
        </div>
      </div>
    </div>
  )
}