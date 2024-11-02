function Fruit(props){
    return (
        <>
            <li>This is a {props.name}</li>
        </>
    ) 

}

function Farm(){
    // const fruits = ['apple', 'banana', 'pineapple', 'mango'];
    const fruits = [
        {id: 2, name: 'banana'},
        {id: 1, name: 'apple'},
        {id: 3, name: 'pineapple'},
        {id: 4, name: 'mango'},
    ];

    return (
        <>
            <ul>
                {fruits.map((fruitItem) => <Fruit key={fruitItem.id} name={fruitItem.name} />)
                }
            </ul>
        </>
    )
}

export default Farm;