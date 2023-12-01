import React from 'react'

export const Button = (props) => {
  const {removeAllCompleted} = props;
  return (
    <div className='w-[90%] h-[30px]'>
      <button
      onClick={removeAllCompleted} 
      className='px-4 py-2 w-full font-semibold text-sm bg-white dark:bg-slate-700 
      text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 
      hover:border-indigo-300 dark:hover:border-slate-400 rounded-md shadow-sm'>
        Remove All Completed
        </button>
    </div>
  )
}
