import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Index";
import NotFound from "./components/NotFound";
import './style/index.scss';
import './style/prime.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
