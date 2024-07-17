import logo from '../assets/logo.png';
import classes from './Header.module.css'; 

// even though we are importing a specific CSS file for this component, the styles are applied globally since they are injected into the head section of index.html

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
