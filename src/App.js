import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
