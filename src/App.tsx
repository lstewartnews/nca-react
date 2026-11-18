import type { ProfileData } from "./types";
import "./App.css";

// const GET_PROFILES_URL = "https://dummyjson.com/users?limit=3&select=id,firstName,lastName,email,age";

/*
Example response 
{
    "users": [
        {
            "id": 1,
            "firstName": "Emily",
            "lastName": "Johnson",
            "email": "emily.johnson@x.dummyjson.com",
            "age": 29
        },
        {
            "id": 2,
            "firstName": "Michael",
            "lastName": "Williams",
            "email": "michael.williams@x.dummyjson.com",
            "age": 36
        },
        {
            "id": 3,
            "firstName": "Sophia",
            "lastName": "Brown",
            "email": "sophia.brown@x.dummyjson.com",
            "age": 43
        }
    ],
    "total": 208,
    "skip": 0,
    "limit": 3
}
*/


const PROFILES: ProfileData[] = [
	{
		id: 1,
		firstName: "Emily",
		lastName: "Johnson",
		email: "emily.johnson@x.dummyjson.com",
		age: 29,
	},
	{
		id: 2,
		firstName: "Michael",
		lastName: "Williams",
		email: "michael.williams@x.dummyjson.com",
		age: 36,
	},
	{
		id: 3,
		firstName: "Sophia",
		lastName: "Brown",
		email: "sophia.brown@x.dummyjson.com",
		age: 43,
	},
];



function App() {
	return (
		<>
			<section id="center">
				<h1>Profiles</h1>
			
			
			</section>
			<section id="spacer"></section>
		</>
	);
}

export default App;
