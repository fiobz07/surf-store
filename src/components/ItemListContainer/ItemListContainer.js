import React from "react";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = ({ greeting }) => {
	return (
		<div className="ItemListContainer py-4">
			<Container>
				<Row>
					<Col>
						<h1>{greeting} </h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ItemListContainer;
