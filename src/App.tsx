import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

// Placeholder components for future pages
const Popular = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        Popular Posts (Coming Soon)
    </div>
);
const Tags = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">Tags (Coming Soon)</div>
);
const NotFound = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        404 - Page Not Found
    </div>
);

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/tags" element={<Tags />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
