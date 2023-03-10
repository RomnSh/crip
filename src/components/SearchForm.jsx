import React from 'react';

const SearchForm = ({formInputValue}) => {
    const hendleNameChange = (event) =>{
        formInputValue(event.target.value)
    }
    return ( 
    <form className='bg-transparent' onSubmit= {(evt) => evt.preventDefault()} >
        <input 
        type='text'
        placeholder='Search your currency...'
        className='search_input mx-5 my-3 px-2 border-2 rounded bg-yellow-100 text-zinc-900'
        onChange={hendleNameChange}
        />
    </form>
   );
}
 
export default SearchForm;