import { Route, Routes } from "react-router-dom";
import { NavBar } from '../nav/Navbar';
import { ApplicationViews } from './ApplicationViews';
import '../styles/App.css';


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
