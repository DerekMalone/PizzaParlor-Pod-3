import { Outlet, Route, Routes } from "react-router-dom"
// import { Menu } from "../components/Menu"
// import { Footer } from "../components/Footer"
// import { Toppings } from "../components/Toppings"
import { Menu, Footer, Toppings } from '../components/index'


export const ApplicationViews = () => {
	return (
				<Routes>
						<Route path="/" element={
							<>
								
								<hr />
								
								<h1>Mama Leoni's Pizza Parlor</h1>
								<div>We make only the freshest pies in the tri-state area</div>

								<hr />

								<Footer />
								<Outlet />
							</>
						}>

								<Route path="menu" element={<Menu />}	/>						
								<Route path="toppings" element={ <Toppings /> } />	
								{/* Need to create a Route to Order... */}
						</Route>
						
				</Routes>
			)
}