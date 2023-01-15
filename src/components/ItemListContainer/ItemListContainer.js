import React from "react";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import {getProducts, getProductsByCategory} from '../../asynckMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	const { categoryId } = useParams()

	useEffect(() => {
		document.title = 'Todos los productos'
	}, [])

	useEffect(() => {
		setLoading(true)

		const asyncFunction = categoryId ? getProductsByCategory : getProducts

		asyncFunction(categoryId).then(response => {
			setProducts(response)
		}).catch(error => {
			console.log(error)
		}).finally(() => {
			setLoading(false)
		})
	}, [categoryId])


	if(loading) {
		return <h1>Cargando productos...</h1>
	}

	return (
		<div className='ItemListContainer'>
			<h1>{greeting}</h1>
			<ItemList products={products} />
		</div>
	)
}

export default ItemListContainer;
