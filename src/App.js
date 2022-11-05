import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Activity from './Pages/Activity';
import ListItem from './Pages/ListItem';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Activity />} />
        <Route path="detail/:id" element={<ListItem />} />
        <Route path="*" element={<h2 className="text-center mt-4 text-2xl font-bold">Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
