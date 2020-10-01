import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Heading, Text } from "@chakra-ui/core";

const about: React.FC = () => {
	return (
		<>
			<Navbar />
			<Main px={4} align="center">
				<Heading as="h1" fontSize="4xl">
					O webu
				</Heading>
				<Text fontSize="2xl">
					Web DUŠEVNÍ (data)BÁZE je bakalářský projekt na Vysoké škole
					uměleckoprůmyslové v ateliéru Grafického designu a vizuální
					komunikace.
				</Text>
			</Main>
		</>
	);
};

export default about;
