import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';

const App = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <VolunteerForm />
    <footer className="bg-dark text-white text-center p-3 mt-5">
      &copy; 2025 HopeForAll NGO. All rights reserved.
    </footer>
  </>
);

export default App;

