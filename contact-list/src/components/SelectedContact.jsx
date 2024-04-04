import { useEffect } from "react"
import { useState } from "react"

export default function SelectedContact({ selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect (() => {
        async function fetchContacts() {
            try {
                const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const api = await response.json()
                setContact(api)
            } catch(error){
                console.error(error)
            }
        }
        fetchContacts()
},[])
    console.log(contact);
    return (
        <div>
        {contact && (
            <div>
            <p>
                name; {contact.name}
            </p>
            <p>
                Email:{contact.email}
            </p>
            <p>
                Phone: {contact.phone}
            </p>
            <div>
                Address:
                <p>
                Street:
                {contact.address.street}
                <br />
                City/Zip:{contact.address.city}<span>  </span>{contact.address.zipcode}
                </p>
            </div>
            <p>
                Company:{contact.company.name}
            </p>
            </div>
        )}
            <button
                onClick={() => {
                setSelectedContactId(null);
                }}
            >
                Back
            </button>
    </div> 
    )
    }