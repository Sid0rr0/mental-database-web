import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Stack, Text } from "@chakra-ui/core";
import BigButton from "../components/BigButton";
import Advices from "../components/Advices";

const questionaire: React.FC = () => {
	return (
		<>
			<Navbar />
			<Main align="center" spacing={8} fontSize="lg">
				<Stack as="section" align="center" spacing={6}>
					<Text textAlign="center">
						Pokud netušíte, s jakými obtížemi hledáte odborníka,
						zkuste si vyplnit orientační diagnostický dotazník.
					</Text>
					<BigButton
						text="Ano, chci si projít dotazník."
						link="/"
						w={["14em", "14.5em", "15em", "15.5em"]}
					/>
					<BigButton
						text="Ne, chci rovnou do databáze."
						link="/database"
						w={["14em", "14.5em", "15em", "15.5em"]}
					/>
				</Stack>
				<Stack as="section" pt="10rem">
					<Advices />
				</Stack>
			</Main>
		</>
	);
};

export default questionaire;
