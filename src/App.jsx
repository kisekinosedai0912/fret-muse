import Nav from './components/Nav.jsx'
import Main from './MainBody.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    return (
      	<Router>
			<Routes>
				{/* Redirect root to home */}
				<Route path="/" element={<Navigate to="/home" replace />} />
				
				<Route path="/*" element={
				<>
					<Nav />
					<Main />
				</>
				} />
			</Routes>
      	</Router>
    );
};
// This is now ready for production deployment!!
// Finaly deployment initiation!