import React from 'react';
import { Link } from 'react-router-dom';

const ShowCards = (props) => {
    const { id, name, email } = props.user;

    return(
        <div>
            <Link to={{pathname: `/contact/${id}`, state: {contact: props.user} }} >
                {name} - {email}
            </Link>
            <button
            onClick={() => props.clickHandler(id)}
            >Delete Contact
            </button>
        </div>
    )
};

export default ShowCards;
