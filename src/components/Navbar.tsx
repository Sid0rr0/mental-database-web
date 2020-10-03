import {
	Box,
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
			alignContent="center"
			position="fixed"
			top="0"
			left="0"
			zIndex="69"
			as="nav"
			mb={-2}
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 85.59 34.14"
								>
									<title>delete menu</title>
									<path
										d="M7.73,34.34,46.81,48c2.31.81,2.27,2.06,0,2.88L7.73,65.53"
										transform="translate(-7.2 -32.92)"
										fill="none"
										stroke="blue"
										stroke-miterlimit="10"
										stroke-width="3"
									/>
									<path
										d="M92.27,34.47,53.19,48.08c-2.31.81-2.27,2.06,0,2.89L92.27,65.66"
										transform="translate(-7.2 -32.92)"
										fill="none"
										stroke="blue"
										stroke-miterlimit="10"
										stroke-width="3"
									/>
								</svg>
							) : (
								<svg
									fill="blue"
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
							/* offset in parent not working */
							mt={-2}
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
									<Link href="/crossroad">
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
