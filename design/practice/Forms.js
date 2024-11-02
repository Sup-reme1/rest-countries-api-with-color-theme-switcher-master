import { useState } from "react";

// function Forms(){

// Using textarea input field
function Forms(){
    const [name, setName] = useState("Put content here");
    const [user, setUser] = useState({
        name: '',
        age: 20
    });

    // inline styling with objects
    const style = {
        // color: 'Green',
        // display: 'flex',
        // flexDirection: 'column',
        // marginRight: '10px',
        // marginLeft: '10px',
        // marginBottom: '5px'
    }

    const captureUser = (input) => {
        setUser(previousState => {
            return { ...previousState, name:input}
        })
        console.log(user);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}><br />
            <label style={style} className="style">Enter your name:
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </label>
            <input type="submit" />
            <button onClick={captureUser}>Add User</button>
        </form>
    )
}

// Using more than one input field
// function Forms(){
//     const [inputs, setInputs] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//     }

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         // setInputs(values => ({...values, [name]: value}));
//         setInputs({[name]: value});
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input 
//                     type="text"
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange={handleChange} 
//                 />
//             </label><br />
//             <label>Enter your age:
//                 <input 
//                     type="number"
//                     name="age"
//                     value={inputs.age || ""}
//                     onChange={handleChange} 
//                 />
//             </label><br />
//             <input type="submit" />
//         </form>
//     )
// }


export default Forms;