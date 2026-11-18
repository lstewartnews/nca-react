import { useEffect, useState } from "react";
import { type ProfileData } from "../types";
import "./Profile.css";

interface ProfileProps {
	profileData: ProfileData;
}

const Profile = ({ profileData }: ProfileProps) => {
	const { firstName, lastName, email, age } = profileData;
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		console.log("Component mounted for", profileData.id);

		return () => {
			console.log("Component unmounted for", profileData.id);
		};
	}, []);

	return (
		<div className="profile-card">
			<h2>Profile Component</h2>
			<p>First Name: {firstName}</p>
			<p>Last Name: {lastName}</p>
			<p>Email: {email}</p>
			<p>Age: {age}</p>
			<div style={{ margin: "20px 0" }}>
				<button>Select</button>
			</div>
			<input
				type="text"
				placeholder="Enter something"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default Profile;
