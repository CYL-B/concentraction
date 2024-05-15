import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={`backlog`}>Backlog</Link>
      <Link to={`dashboard`}>Dashboard</Link>
      <Link to={`error-page`}>404</Link>
      <Link to={`log-in`}>Log-in</Link>
      <Link to={`pomodoro`}>Pomodoro</Link>
      <Link to={`sign-up`}>Sign-up</Link>
      <Link to={`styleguide`}>Styleguide</Link>
    </>
  );
}

export default App;
