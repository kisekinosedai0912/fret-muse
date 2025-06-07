import Nav from './components/Nav.jsx'
import Main from './MainBody.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    return (
      	<Router>
			<Routes>
				{/* Redirect root to home */}
				<Route path="/" element={<Navigate to="/fretmuse/home" replace />} />
				
				<Route path="/fretmuse/*" element={
				<>
					<Nav />
					<Main />
				</>
				} />
			</Routes>
      	</Router>
    );
};