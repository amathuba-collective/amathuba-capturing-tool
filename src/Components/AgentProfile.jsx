import { useAuth0 } from "@auth0/auth0-react"; // a hook that gives you autho properties

function AgentProfile() {
	const { isAuthenticated, isLoading, user } = useAuth0();
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt='___' />
				<h4>{user.name}</h4>
				<p>{user.email}</p>
			</div>
		)
	);
}

export default AgentProfile;
