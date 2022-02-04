import { fontFamily } from './styles';

export default function ({ children }) {
  const style = {
    fontFamily,
    fontSize: '2.75rem',
    padding: '0.5rem',
    textAlign: 'center',
    width: '100%',
  };

  return <h1 style={style}>{children}</h1>;
}
