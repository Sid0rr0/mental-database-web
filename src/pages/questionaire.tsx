import Main from "../components/Main";
import Navbar from "../components/Navbar";
import {
	Box,
	Link as ChakraLink,
	Menu,
	MenuButton,
	MenuItem,
	Button,
	MenuList,
	Stack,
	Text,
} from "@chakra-ui/core";

interface questionaireProps {}
const questionaire: React.FC<questionaireProps> = ({}) => {
	return (
		<>
			<Navbar />
			<Main align="center" fontSize="xl">
				<Text>aaa</Text>
			</Main>
		</>
	);
};

export default questionaire;
