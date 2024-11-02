import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
// import Header from './Header';
import Footer from './Footer';
import AddContact from './AddContact';
import ShowContacts from './ShowContacts';
import ContactDetail from './ContactDetail';


function App() {
  const storage_key = 'contact';

  const [contacts, setContact] = useState(() => {
    let Data = JSON.parse(localStorage.getItem(storage_key));
    return Data || [];
  });

  // const users = [
  //   {
  //     id: '1',
  //     name: 'Supreme',
  //     email: 'supreme@gmail.com'
  //   },
  //   {
  //     id: '2',
  //     name: 'Epitome',
  //     email: 'epitome@gmail.com'
  //   }
  // ];

  const addContact = (contact) => {
    setContact([...contacts, contact]);
  }

  // useEffect runs when the page renders
  // useEffect to retrive a data to the localstorage
  useEffect(() => {
    const retrieveData = JSON.parse(localStorage.getItem(storage_key));
    if (retrieveData) {
      setContact(retrieveData);
    }
  }, []);
  
  // useEffect to store a data to the localstorage
  useEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(contacts));
  },[contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContact(newContactList);
  }
  
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <h1>Contact Manager</h1>
            <Link to='/'>Home</Link>
            <NavLink to='add'>Add Contact</NavLink>
          </nav>
        </header>
        <Routes>
          <Route 
            path='/' exact 
            element={<ShowContacts users={contacts} getContactId={removeContactHandler} />} 
            // render={(props) => {<ShowContacts {...props} users={contacts} getContactId={removeContactHandler} />}}
          />
          <Route 
            path='/add' 
            element={<AddContact addContact={addContact}/>} 
          />
          <Route 
            path='/contact/:id'
            element={<ContactDetail />}
          />
        </Routes>
        
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}


//      {/* <Route path='/' component={Footer} /> */}
//      {/* <AddContact addContact={addContact} />
//      <Footer /> */}
export default App;
