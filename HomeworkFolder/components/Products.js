import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Movie from './Movie';

const fetchPopular = gql`
  query fetchPopular {
    movies: popularMovies {
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

const searchItem = 'search';

const fetchSearched = gql`
  query fetchPopular {
    movies: popularMovies(where:{name_contains_i: ${searchItem}}) {
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

const MovieListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin-top: 40px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(fetchPopular);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <MovieListStyles>
        {data.movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </MovieListStyles>
    </div>
  );
}
