import { useState } from 'react';
import gql from 'graphql-tag';

const fetchSearched = gql`
  query fetchPopular {
    movies: popularMovies(where: { name_contains_i: " " }) {
      id
      name
      overview
      releaseDate
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      reviews {
        id
        author
        content
        language {
          code
          name
        }
      }
    }
  }
`;

export default function searchBar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('');
  return (
    <input
      type="text"
      id="searchBar"
      name="searchBar"
      placeholder="Seach Movies"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

function search(searchItem) {
  // eslint-disable-next-line no-const-assign
  fetchSearched = gql`
  query fetchPopular {
    movies: popularMovies(where: { name_contains_i: ${searchItem} }) {
      id
      name
      overview
      releaseDate
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      reviews {
        id
        author
        content
        language {
          code
          name
        }
      }
    }
  }
`;
}
