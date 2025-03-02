const ItemList = () => {
    const element = ["Ruben","Andrea","Gaia","Vera"];
    
    return (
        <>
        <ol>
            {
                element.map((propername,index) => (
                    <li key={`name-item-${index}`}>{propername}</li>
                ))
            }
        </ol>
        </>
    )
};

export default ItemList