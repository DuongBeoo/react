import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to our clean React Router demo!</p>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>This is a demo project to showcase routing in React without Tailwind CSS.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <p>Feel free to reach out via email or social media!</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
