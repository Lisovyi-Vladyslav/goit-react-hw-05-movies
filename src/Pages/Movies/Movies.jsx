import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import {Searchbar} from 'components/Searchbar/Searchbar'
import { SearchForm } from 'components/SearchForm/SearchForm'
import MoviesListItem from 'components/MoviesListItem/MoviesListItem'
import {BASE_URL, MY_KEY} from "Constants/Constants";

export default function Movies() {

  const [search, setSearch] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [, setSearchParams] = useSearchParams();

  const handlSearcPhoto = (search) => {
     setSearch(search.search);
   };

  useEffect(() => {
    if (!search) {
      return;
    }

      const loadFilm = async () => {
        try {
     
       const ulr = `${BASE_URL}/search/movie?${MY_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
    
       const movies = await axios.get(ulr);
    
     setFilmList(movies.data.results)
    
   } catch (error) {
     console.log(error)
      }
    }
    
    loadFilm();

    const nextParams = search !== "" ? { query: search } : {};
    setSearchParams(nextParams);
  }, [search, setSearchParams])
  
  
  return (
    <>     
<Searchbar>
    <SearchForm handlSearcPphoto={handlSearcPhoto} />
      </Searchbar>
      <ul>
      <MoviesListItem filmList={filmList}></MoviesListItem>  
      </ul>
      </>
  )
}


// import { useParams, useLocation } from "react-router-dom";
// import { BackLink } from "../components/BackLink";
// import { getProductById } from "../fakeAPI";

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const product = getProductById(id);
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? "/products";

//   return (
//     <main>
//       <BackLink to={backLinkHref}>Back to products</BackLink>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <div>
//         <h2>
//           Product - {product.name} - {id}
//         </h2>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
//           sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
//           a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
//           atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
//           praesentium ipsum quos unde voluptatum?
//         </p>
//       </div>
//     </main>
//   );
// };

// export const ProductList = ({ products }) => {
//   const location = useLocation();

//   return (
//     <Container>
//       {products.map((product) => (
//         <CardWrapper key={product.id}>
//           <Link to={`${product.id}`} state={{ from: location }}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{product.name}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };
// 