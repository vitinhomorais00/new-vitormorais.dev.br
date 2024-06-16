import './styles/header.css'; // Assuming you'll add some CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>My Website</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> 
        </ul>
      </nav>
      <div className="header__user-info">
        <span>Welcome, User!</span>
        <button className="header__logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
