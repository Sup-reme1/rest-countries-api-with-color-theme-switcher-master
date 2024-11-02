const ContactDetail = (props) => {
    console.log(props);
    return(
        <div>
            Hello User
            <p>Contact Information</p>
            <ul>
                <li>Name - {}</li>
                <li>email - {}</li>
            </ul>
        </div>
    )
}

export default ContactDetail;