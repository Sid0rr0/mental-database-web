import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Profile from "../../components/questionaire/Profile";

interface profileProps {}
const profile: React.FC<profileProps> = ({}) => {
	return (
		<>
			<Navbar />
			<Main>
				<Profile
					name="Ondřej Krejčí"
					expertise={["Klinický psycholg", "Psychoterapeut"]}
					availability="Volná místa"
					city="Praha"
					gender="Muž"
					workplace="Psychologické centrum Praha 2"
					method="EDMR"
					specialities={[
						"Smíšená úzkostná a depresivní porucha",
						"Poruchy nálady (depresivní fáze)",
						"Panická porucha",
					]}
				/>
			</Main>
		</>
	);
};

export default profile;
