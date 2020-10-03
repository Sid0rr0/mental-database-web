import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Stack, Text } from "@chakra-ui/core";
import BigButton from "../components/BigButton";
import Advices from "../components/Advices";

const corssroad: React.FC = () => {
	return (
		<>
			<Navbar />
			<Main align="center" spacing={4} fontSize="lg">
				<Stack as="section" align="center" spacing={3}>
					<Text textAlign="center">
						Pokud netušíte, s jakými obtížemi hledáte odborníka,
						zkuste si vyplnit orientační diagnostický dotazník.
					</Text>
					<BigButton
						text="Ano, chci si projít dotazník."
						link="/questionaire"
						w={["16.5em", "17em", "17.5em", "18em"]}
					/>
					<BigButton
						text="Ne, chci rovnou do databáze."
						link="/database"
						w={["16.5em", "17em", "17.5em", "18em"]}
					/>
				</Stack>
				<Stack as="section" pt="5rem">
					<Advices />
				</Stack>
			</Main>
		</>
	);
};

export default corssroad;
