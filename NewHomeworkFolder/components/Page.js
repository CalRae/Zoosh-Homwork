import PropTypes from 'prop-types';
import Header from './Header';

export default function PageFunction({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

PageFunction.propTypes = {
  children: PropTypes.any,
};
