import React from "react";
import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../services/firebase/firebasConfig";
import {useParams} from "react-router-dom";
import "./ItemListContainer.scss";
import CarouselImage from "../CarouselImage/CarouselImage";

const ItemListContainer = ({greeting, isHome = false}) => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState({category: ""});
	const [loading, setLoading] = useState(true);

	const {categoryId} = useParams();

	useEffect(() => {
		document.title = categoryId ? category.category : greeting;
	}, []);

	useEffect(() => {
		setLoading(true);

		const collectionRef = categoryId
			? query(collection(db, "products"), where("categoryId", "==", categoryId))
			: collection(db, "products");

		const getCategoryTitle = categoryId
			? query(
					collection(db, "categories"),
					where("categoryId", "==", categoryId)
			  )
			: false;

		if (getCategoryTitle) {
			getDocs(getCategoryTitle)
				.then((response) => {
					const categoriesAdapted = response.docs.map((doc) => {
						const data = doc.data();
						return {id: doc.id, ...data};
					});
					setCategory(categoriesAdapted[0]);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}

		getDocs(collectionRef)
			.then((response) => {
				const productsAdapted = response.docs.map((doc) => {
					const data = doc.data();
					return {id: doc.id, ...data};
				});
				setProducts(productsAdapted);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	if (loading) {
		return <h1>Cargando productos...</h1>;
	}

	return (
		<div className="ItemListContainer">
			{isHome && <CarouselImage />}
			<h1 className="bebas-neue-regular">
				{categoryId ? category.category : greeting}
			</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
