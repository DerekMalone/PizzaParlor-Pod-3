import { Outlet, Route, Routes } from "react-router-dom"
import { ANewComponent } from "../PizzaParlor/ANewComponent"
import { Footer } from "../PizzaParlor/Footer"
import { Toppings } from "./Toppings"


export const ApplicationViews = () => {
	return (
				<Routes>
						<Route path="/" element={
							<>
								<h1>Mama Leoni's Pizza Parlor</h1>
								<div>We make only the freshest pies in the tri-state area</div>
								<Footer />
								<Outlet />
							</>
						}>

								<Route path="toppings" element={ <Toppings /> } />	
								<Route path="component" element={<ANewComponent />}	/>						
						</Route>
						
				</Routes>
			)
}