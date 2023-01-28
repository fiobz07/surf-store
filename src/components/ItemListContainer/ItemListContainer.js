import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
//import {getProducts, getProductsByCategory} from '../../asynckMock';
import ItemList from "../ItemList/ItemList";
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebasConfig'
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	const { categoryId } = useParams()

	useEffect(() => {
		document.title = 'Todos los productos'
	}, [])

	useEffect(() => {
		setLoading(true)

		const collectionRef = categoryId 
		? query(collection(db, 'products'), where('categoryId', '==', categoryId))
		: collection(db, 'products')

		getDocs(collectionRef).then(response => {
			const productsAdapted = response.docs.map(doc =>{


				const data = doc.data()
				return {id: doc.id, ...data}
			})
			setProducts(productsAdapted)

		}).catch(error => {
			console.log(error)
		}).finally(() => {
			setLoading(false)
		}
		)

		/* const asyncFunction = categoryId ? getProductsByCategory : getProducts

		asyncFunction(categoryId).then(response => {
			setProducts(response)
		}).catch(error => {
			console.log(error)
		}).finally(() => {
			setLoading(false)
		}) */

		

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
