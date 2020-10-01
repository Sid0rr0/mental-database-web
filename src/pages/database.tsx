import Database from "../components/Database";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import TagContainer from "../components/TagContainer";

const database: React.FC = ({}) => {
	return (
		<>
			<Navbar />
			<TagContainer />
			<Main align="center" fontSize="xl">
				<Database />
			</Main>
		</>
	);
};

export default database;
