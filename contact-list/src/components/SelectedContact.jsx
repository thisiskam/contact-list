import { useEffect } from "react"
import { useState } from "react"

export default function SelectedContact({ selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect (() => {
        async function fetchContacts() {
            const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const api = await response.json()
            setContact({name:api.name, email:api.email, phone:api.phone})
        }
        fetchContacts()
},)
    return (
        <>
            <div></div>
            <div></div>
            <div></div>
        </>
    )
    }