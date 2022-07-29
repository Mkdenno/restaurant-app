import React from 'react'
// const URL='https://slash-olivine-gardenia.glitch.me/foods'

const Search = () => {
  // const [filter, setFilter] = useState("");


//   const searchText=(e)=>{
//     e.preventDefault()
//     setFilter(e.target.value)
//   }
// { foods.filter((food)=>food.name)
// }
  return (
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Seach for your Fevorite food"
              // value={filter}
              // onChange={searchText}
              
            />
          </div>
          
        </div>
  )
}

export default Search