import Database from "../components/Database";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const database: React.FC = ({}) => {
	return (
		<>
			<Navbar />
			<Main align="center" fontSize="xl">
				<Database />
			</Main>
		</>
	);
};

export default database;
