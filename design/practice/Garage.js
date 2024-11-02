import React from 'react';

// ========= Class Component

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: 'Benz'}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({name: 'Venza'})
        }, 1000);
    }
    componentDidUpdate(){
        document.getElementById('div').innerHTML = `After render function`;
    }

    // getSnapshotBeforeUpdate(prevP, prevS){
    //     document.getElementById('div').innerHTML = `<p>Previous name is ${prevS.name}</p>`;
    // }
    
    changeName = () => {
        this.setState({name: 'Toyota'});
    }
    render(){
        return (<>
        <h1>The name of my car is {this.state.name} with color {this.props.color}</h1>
        {/* <p>Change name to Toyota <button onClick={this.changeName}>Change</button></p>         */}
        <div id='div'></div>
        </>);
    }
}

class Garage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: 'Abuja',
            owner: 'Supreme',
            number: 1,
        }
    }
    render(){
        return (<h1>
            <Car color='Red'/>
            {/* It is parked in my Garage at {this.state.location} owned 
            by {this.state.owner}, the number is {this.state.number} */}
            </h1>); 
    }
}

export default Garage;