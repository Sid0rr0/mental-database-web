import {
	Box,
	Link as ChakraLink,
	Menu,
	MenuButton,
	MenuItem,
	Button,
	MenuList,
	Stack,
	Heading,
} from "@chakra-ui/core";
import Link from "next/link";

const Navbar: React.FC = ({}) => {
	return (
		<Box
			width="100%"
			height={["3em", "3em", "4em", "5em"]}
			bg="#F9F09B"
			display="flex"
			justifyContent="space-between"
			position="fixed"
			top="0"
			left="0"
			zIndex="69"
			pb={1}
			as="nav"
		>
			<Heading
				fontWeight="normal"
				ml={[2, 3, 4, 5]}
				fontSize={["2xl", "3xl", "4xl", "5xl"]}
				textDecoration="none"
				verticalAlign="middle"
				my="auto"
			>
				<Link href="/">
					<a>DUŠEVNÍ (data)BÁZE</a>
				</Link>
			</Heading>

			<Menu>
				{({ isOpen }) => (
					<>
						<MenuButton
							isActive={isOpen}
							as={Button}
							bg="none"
							w={["3em", "3em", "4em", "5em"]}
							mr={[1, 2, 3, 4]}
							my="auto"
							_active={{ bg: "none" }}
							_focus={{ bg: "none" }}
						>
							{isOpen ? (
								<svg viewBox="0 0 96 96">
									<polygon
										fill="black"
										points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "
									/>
								</svg>
							) : (
								<svg
									fill="black"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							)}
						</MenuButton>
						<MenuList
							w="100%"
							h="100%"
							p={0}
							pt={["0", "0", "0", "1em"]}
							border="none"
							position="fixed"
							left={0}
							background="yellow"
						>
							<Stack
								spacing={2}
								fontSize={["2xl", "3xl", "4xl", "5xl"]}
							>
								<MenuItem justifyContent="center">
									<Link href="/help">
										<a>Akutní pomoct</a>
									</Link>
								</MenuItem>
								<MenuItem justifyContent="center">
									<Link href="/database">
										<a>Databáze</a>
									</Link>
								</MenuItem>
								<MenuItem justifyContent="center">
									<Link href="/questionaire">
										<a>Dotazník</a>
									</Link>
								</MenuItem>

								<MenuItem justifyContent="center">
									<Link href="/information">
										<a>Informace</a>
									</Link>
								</MenuItem>
								<MenuItem justifyContent="center">
									<Link href="/about">
										<a>O webu</a>
									</Link>
								</MenuItem>
							</Stack>
						</MenuList>
					</>
				)}
			</Menu>
		</Box>
	);
};

export default Navbar;
