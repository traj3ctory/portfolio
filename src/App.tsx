import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Index";
import NotFound from "./components/NotFound";
import './style/index.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
