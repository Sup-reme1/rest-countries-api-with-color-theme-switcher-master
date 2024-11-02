import React from 'react';
import ShowCards from './ShowCards';

const ShowContacts = (props) => {

    // const ShowCards = (props) => {
    //     const { id, name, email } = props.user;
    //     return(
    //     <div>
    //         {name} - {email}
    //     </div>
    // )}

//     const Dusers = [
//     {
//       id: 1,
//       name: 'Supreme',
//       email: 'supreme@gmail.com'
//     },
//     {
//       id: 2,
//       name: 'Epitome',
//       email: 'epitome@gmail.com'
//     }
//   ];

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const users = props.users.map((user) => {
        return(
            <><ShowCards key={user.id} user={user} clickHandler={deleteContactHandler} /></>
        );
    });

    return(
           <section>{users}</section> 
    );
}

export default ShowContacts;