"use client"

type User = {
    id: number,
    name: string,
    username: string,

}

import { useState } from "react"
export default function FilterUser({users} : {users: User[]}) {
    const [searchTerm, setSearchTerm] = useState("");
    const FilteredUsers = users.filter((user) => { return user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) });
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
            />
            <ul>
                {FilteredUsers.map((user: User) => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )


}