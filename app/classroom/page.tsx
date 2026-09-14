import FilterUser from "@/components/FilterUser";




export default async function Classroom() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()

    return (
        <div>
            <h1>Classroom</h1>
            <p>This is classroom page</p>

            <FilterUser users={data} />

        </div>
    );
}