type profile = {
  params:Promise<{name : string}>
}


export default async function IshandProfile ({params}:profile){

    const users = [
  {
    id: 1,
    name: "Ishand Rai",
    mail: "ishand@example.com",
    bio: "A computer science student interested in full-stack web development."
  },
  {
    id: 2,
    name: "Rahul Sharma",
    mail: "rahul@example.com",
    bio: "A frontend developer who enjoys building modern React applications."
  },
  {
    id: 3,
    name: "Priya Singh",
    mail: "priya@example.com",
    bio: "A backend enthusiast focused on APIs, databases, and scalable systems."
  }
]

    const pageparams = await params;
    const username = decodeURIComponent(pageparams.name);

    const user = users.find(user=> user.name.toLocaleLowerCase() === username.toLocaleLowerCase());

    return (
    <div>
    <h1>Username from URL: {username}</h1>
    <h2>Found User: {user?.name}</h2>
    <p>Email: {user?.mail}</p>
    <p>Bio: {user?.bio}</p>
  </div>
    );
}