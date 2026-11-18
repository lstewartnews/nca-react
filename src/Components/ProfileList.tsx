import { useState } from "react";
import type { ProfileData } from "../types";
import Profile from "./Profile";

interface ProfileListProps {
	profiles: ProfileData[];
}

const ProfileList = ({ profiles }: ProfileListProps) => {
	const [idToRender, setIdToRender] = useState<number | null>(null);
	return (
			<div id="center">

			{profiles.map((profile) => (
				<button onClick={() => setIdToRender(profile.id)}>
					Show profile for {profile.firstName} {profile.lastName}
				</button>
			))}
			{profiles
				.filter((profile) => {
					return profile.id === idToRender;
				})
				.map((profile) => (
					<Profile profileData={profile} />
				))}
			</div>
	);
};

export default ProfileList;
