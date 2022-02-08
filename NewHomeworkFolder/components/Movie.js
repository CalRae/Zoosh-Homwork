import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

export default function Movie({ movie }) {
  return (
    <ItemStyles key={movie.id}>
      <Title>
        <Link href={`https://en.wikipedia.org/wiki/${movie.name}`}>
          {movie.name}
        </Link>
      </Title>
      <img src={movie.img.url} />
    </ItemStyles>
  );
}
