import { Text, Stack, Heading } from "@chakra-ui/core";
import Database from "../components/Database";
import HelpCard from "../components/HelpCard";
import BigButton from "../components/BigButton";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Advices from "../components/Advices";

const index: React.FC = () => {
	return (
		<>
			<Navbar />

			<Main px={4} align="center" spacing="3rem" fontSize="xl">
				<Heading
					as="h1"
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl", "6xl"]}
				>
					Hledáte duševní pomoc?
				</Heading>
				<Stack as="section" align="center">
					<BigButton
						text="Tuším, co mě trápí"
						link="/"
						w={["10.5em", "11em", "11.5em", "12em"]}
					/>
					<Text mt={1} fontSize={["sm", "md", "md", "md"]}>
						Chci rovnou do databáze
					</Text>
					<BigButton
						text="Netuším, co mě trápí"
						link="/questionaire"
						w={["10.5em", "11em", "11.5em", "12em"]}
					/>
					<Text mt={1} fontSize={["sm", "md", "md", "md"]}>
						Chci si projít orientační dotazník
					</Text>
				</Stack>
				<Stack
					as="section"
					spacing={4}
					align="center"
					pt={8}
					fontSize="2xl"
				>
					<Text textAlign="center">
						Tento web je databáze, která pomáhá vyhledat duševní
						pomoc.
					</Text>
					<Text textAlign="center">
						Štítky/tagy usnadňují vyhledávání odborníků v oblasti
						duševního zdraví.
					</Text>
				</Stack>
				<Stack as="section" pt="6em">
					<Advices />
				</Stack>
				<Stack as="section" align="center">
					<Heading>Akutní pomoc</Heading>
					<HelpCard
						title="Linka první psychické pomoci"
						numbers={["116 123"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Pražská linka důvěry"
						numbers={["222 580 697"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Linka důvěry Centra krizové intervence PN Bohnice"
						numbers={["284 016 666"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Linka naděje Brno"
						numbers={["547 212 333"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Linka bezpečí"
						numbers={["116 111"]}
						open={["nonstop"]}
					/>
				</Stack>
				<Stack as="section" align="center">
					<Database />
				</Stack>
				<Stack as="section" align="center">
					<Heading>O webu</Heading>
					<Text>
						Web DUŠEVNÍ (data)BÁZE je bakalářský projekt na Vysoké
						škole uměleckoprůmyslové v ateliéru Grafického designu a
						vizuální komunikace.
					</Text>
				</Stack>
			</Main>
		</>
	);
};

export default index;
