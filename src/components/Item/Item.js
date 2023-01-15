const Item = ( {name, img, price}) => {
    return (
        <div>
            <h4> {name}</h4>
        < img src = {img} alt = {name}/>
            <p> $ {price} </p>
            <Link to = {'/item/${id}'}> Ver detalle</Link>

        </div>
    )
}

export default Item 