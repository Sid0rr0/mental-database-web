import { Stack, Heading } from "@chakra-ui/core";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import HelpCard from "../components/HelpCard";

const help: React.FC = () => {
	return (
		<>
			<Navbar />
			<Main align="center" spacing={8}>
				<Heading
					as="h1"
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl", "6xl"]}
				>
					Akutní pomoc
				</Heading>
				<Stack as="section" textAlign="center">
					<Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
						Telefonní linky
					</Heading>
					<HelpCard
						title="Linka první psychické pomoci"
						number="116 123"
						open="nonstop"
					/>
					<HelpCard
						title="Pražská linka důvěry"
						number="222 580 697"
						open="nonstop"
					/>
					<HelpCard
						title="Linka důvěry Centra krizové intervence PN Bohnice"
						number="284 016 666"
						open="nonstop"
					/>
					<HelpCard
						title="Linka naděje Brno"
						number="547 212 333"
						open="nonstop"
					/>
					<HelpCard
						title="Linka bezpečí"
						number="116 111"
						open="nonstop"
					/>
				</Stack>
				<Stack as="section">
					<Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
						Krizová centra
					</Heading>
				</Stack>
			</Main>
		</>
	);
};

export default help;
