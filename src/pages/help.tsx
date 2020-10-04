import { Stack, Heading, Text } from "@chakra-ui/core";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import HelpCard from "../components/HelpCard";

const help: React.FC = () => {
	return (
		<>
			<Navbar />
			<Main align="center" spacing={8} fontSize="xl" fontWeight="normal">
				<Heading
					as="h1"
					textAlign="center"
					fontSize={["3xl", "4xl", "5xl", "6xl"]}
					fontWeight="normal"
				>
					Akutní pomoc
				</Heading>
				<Stack as="section" textAlign="center">
					<Heading
						fontSize={["2xl", "3xl", "4xl", "5xl"]}
						fontWeight="normal"
					>
						Telefonní linky
					</Heading>
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
						title="Linka důvěry Ostrava"
						numbers={["737 267 939", "596 618 908"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Modrá linka"
						numbers={["549 241 010", "608 902 410"]}
						open={["9:00 - 21:00"]}
					/>
					<HelpCard
						title="Linka bezpečí"
						numbers={["116 111"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Centrum pro zneužívané a týrané děti SPONDEA"
						numbers={["541 235 511", "608 118 088"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Dětské krizové centrum"
						numbers={["241 484 149", "777 715 215"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Rodičovská linka"
						numbers={["606 021 021"]}
						open={[
							"pondělí – čtvrtek: 13:00 – 21:00",
							"pátek: 9–17",
						]}
					/>
					<HelpCard
						title="Senior telefon"
						numbers={["800 157 157"]}
						open={[]}
					/>
					<HelpCard
						title="Linka seniorů, Elpida, o.p.s."
						numbers={["800 200 007"]}
						open={["8:00 – 20:00"]}
					/>
					<HelpCard
						title="Bílý kruh bezpečí pro oběti kriminality a domácího násilí"
						numbers={["116 006"]}
						open={["nonstop"]}
					/>
					<HelpCard
						title="Centrum Anabell poruchy příjmu potravy"
						numbers={["774 467 293"]}
						open={[]}
					/>
				</Stack>
				<Stack as="section" textAlign="center">
					<Heading
						fontSize={["2xl", "3xl", "4xl", "5xl"]}
						fontWeight="normal"
					>
						Krizová centra
					</Heading>
					<Text>Krizové centrum RIAPS Praha</Text>
					<Text>Centrum krizové intervence PN v Bohnicích</Text>
					<Text>Krizové centrum Psychiatrické kliniky FN Brno</Text>
					<Text>Krizové centrum Ostrava, o.s.</Text>
				</Stack>
			</Main>
		</>
	);
};

export default help;
