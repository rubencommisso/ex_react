const ItemList = () => {
    const element = ["Ruben","Andrea","Gaia","Vera"];
    
    return (
        <>
        <ul>
            {
                element.map((propername,index) => (
                    <li key={`name-item-${index}`}>{propername}</li>
                ))
            }
        </ul>
        </>
    )
};

export default ItemList