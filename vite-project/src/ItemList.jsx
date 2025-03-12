const ItemList = ({element}) => {
    
    
    return (
        <ul>
            {element.map((propername, index) => (
                <li key={`name-item-${index}`}>{propername}</li>
            ))}
        </ul>
    );
};

export default ItemList;
