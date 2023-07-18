import React from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import "./searchForm.css"

const SearchForm = () => {
  const handleSubmit = (second) => {  }
  const searchText = (second) => { }
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm