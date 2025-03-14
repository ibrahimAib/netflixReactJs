import '../css/Home.css'
function Search({handelSearch, searchQuery,onChange}){
    return(
        <form onSubmit={handelSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies.."
          className="search-input"
          value={searchQuery}
          onChange={onChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    )
}

export default Search