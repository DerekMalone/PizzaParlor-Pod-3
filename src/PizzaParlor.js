import { Route, Routes } from "react-router-dom";
import { NavBar } from './Navbar';
import { ApplicationViews } from './views/ApplicationViews';
import './styles/App.css';


export const PizzaParlor = () => {

  return (
    <Routes>
      <Route path="*" element={
        <>
            <NavBar />            
            <ApplicationViews />
        </>
      }/>
    
    </Routes>
  );
}
