import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends React.Component{
    state = {
        id: uuidv4(),
        name: '',
        email: ''
    }

    add = (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        if (name === '' || email === ''){
            alert('Enter a name and email');
            return;
        }
        
        this.props.addContact(this.state);
        this.setState({ name: '', email: ''});
    }
    render(){
        return(
            <section>
                <form onSubmit={this.add}>
                    <div>
                        <label>Enter Name</label>
                        <input 
                          type='text' 
                          placeholder='Name'
                          value={this.state.name}
                          onChange={(e) => { this.setState({name: e.target.value})}} />
                    </div>
                    <div>
                        <label>Enter Email</label>
                        <input 
                          type='email' 
                          placeholder='name@xyz.com' 
                          value={this.state.email}
                          onChange={(e) => { this.setState({email: e.target.value})}} />
                    </div>
                    <button>Add</button>
                </form>
            </section>
        )
    }
}

export default AddContact;