type cardProps = {
    title:string;
    description:string;
}



export default function Card({title, description}:cardProps){

    return (
        <div className="p-4 shadow-md ">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}