import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value; //value(name="search")
    if(!searchValue) return;
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text"
        className="form-input"
        name="search"  // name only acceessible by the e.target.elements
        placeholder="cat" />
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  )
}

export default SearchForm