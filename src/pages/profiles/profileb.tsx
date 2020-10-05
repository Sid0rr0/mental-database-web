import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Profile from "../../components/questionaire/Profile";

interface profilebProps {}
const profileb: React.FC<profilebProps> = ({}) => {
	return (
		<>
			<Navbar />
			<Main>
				<Profile
					name="Anna Nováková"
					expertise={["Psychoterapeut"]}
					availability="Volná místa"
					city="Cheb"
					gender="Žena"
					workplace="Psychologické centrum Cheb"
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

export default profileb;
