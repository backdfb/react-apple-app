import { useLocation } from "react-router-dom"

const SearchPage = () => {

  const location = useLocation(); 

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage