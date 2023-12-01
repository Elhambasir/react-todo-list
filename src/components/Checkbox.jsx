import React, { useState } from 'react'
import { IoMdTrash } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { useRef } from 'react';
import { Input } from './Input';

export const Checkbox = (props) => {
  const { id, name, completed, editTask, removeTodo } = props;
  const checkRef = useRef(null);
  const editInput = useRef(null);
  const makeEditAble = () => {
    editInput.current?.classList.toggle('hidden');

    const hasHiddenClass = editInput.current?.classList.contains('hidden');

    if (!hasHiddenClass) {
      editInput.current?.firstChild.focus();
    }

  }

  const [newName, setNewName] = useState(name);
  const handleEdit = (e) => {
      editInput.current?.classList.toggle('hidden');
      editTask(id, newName);
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const divStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '210px'
  };
  return (
    
    <div className='' id='check'>
      <div className="relative flex gap-x-3 cursor-pointer bg-white my-1 py-2 
      px-1 w-full overflow-hidden">
        <div className="flex h-6 items-center">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            onChange={(e) => { editTask(id, newName, e.target.checked) }}
            checked={completed}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
          />
        </div>
        <div className="text-sm leading-6 flex-2 flex flex-col items-start">
          <div id={id} ref={checkRef}
            onInput={handleChange}
            className={`font-medium text-gray-500 
            cursor-pointer px-2 overflow-hidden
            focus:outline-none focus:border-b focus:border-b-slate-200
            ${completed?'line-through text-slate-400':''}`}
            onBlur={() => { editTask(id, newName); checkRef.current.contentEditable = false; }}
          >
            <p className='w-[210px]' style={divStyle}>{newName}</p>
          </div>
          <div ref={editInput} className="absolute bottom-0 h-full w-[230px]
          left-8 hidden ">
            <input type="text"
              onChange={handleChange}
              onBlur={handleEdit}
              className="w-full border-none rounded-md p-1 focus:border-none
              outline-none text-gray-600 font-italic h-full
              "
              defaultValue={newName} />
          </div>
        </div>
        <button className="h-full rounded-md border-0 bg-transparent
          pl-2 pr-2 text-gray-500 sm:text-sm hover:text-green-500 absolute 
          right-7 top-0"
          onClick={makeEditAble}
        >
          <AiFillEdit />
        </button>
        <button className="h-full rounded-md border-0 bg-transparent
          pl-2 pr-2 text-gray-500 sm:text-sm hover:text-red-500 flex-1 absolute right-0 top-0"
          onClick={(e) => removeTodo(id)}>
          <IoMdTrash />
        </button>
      </div>
    </div>
  )
}
