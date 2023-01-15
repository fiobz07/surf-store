import React from "react";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import {getProducts} from '../../asynckMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState ([])
	const [loading,setLoading]= useState (true)
	const {categoryId} = useParams ()

	 useEffect (() => {
		const asyncFunction = categoryId ? getProducts : getProducts 

		asyncFunction (categoryId)
		.then (products => {
			setProducts (products)
		}) .catch (error => {
			console.log (error)
		}) .finally(() => {
			setLoading (false)
		})
	}, [categoryId])
		
		return (
			<div>
				<h1> Listado de productos</h1>
				<ItemList products = { products}/>
			</div>
		)
		if (loading) {
			return <h1> Cargando...</h1>
		}

	console.log (products)

	return (
		<div className="ItemListContainer py-4">
			<Container>
				<Row>
					<Col>
						<h1>{greeting} </h1>

							<ul> 
								{productsComponents} 
								</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ItemListContainer;
