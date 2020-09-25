import {
	Box,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	Button,
	MenuList,
	Stack,
	Heading,
} from "@chakra-ui/core";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
	return (
		<nav>
			<Box
				width="100%"
				height={["3em", "3em", "4em", "4em"]}
				bg="#FFFF00"
				display="flex"
				justifyContent="space-between"
			>
				<Heading fontWeight="normal" ml={3}>
					<Link
						href="#"
						fontSize={["xl", "2xl", "3xl", "4xl"]}
						textDecoration="none"
						verticalAlign="middle"
						_hover={{ textDecoration: "none" }}
					>
						Mental Data(Base)
					</Link>
				</Heading>

				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								bg="none"
								w="2em"
								m={["1", "1", "2", "3"]}
								_active={{ bg: "none" }}
							>
								{/* {isOpen ? "y" : "x"} */}
								<svg
									fill="black"
									width="16px"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							</MenuButton>
							<MenuList
								w="100%"
								h="100%"
								p={0}
								border="none"
								position="fixed"
								top={["2em", "3em", "4em", "5em"]}
								left={0}
							>
								<Stack
									spacing={2}
									fontSize={["2xl", "3xl", "4xl", "5xl"]}
								>
									<MenuItem>Akutní pomoct</MenuItem>
									<MenuItem>Databáze</MenuItem>
									<MenuItem>Dotazník</MenuItem>
									<MenuItem>Informace</MenuItem>
									<MenuItem>O webu</MenuItem>
								</Stack>
							</MenuList>
						</>
					)}
				</Menu>
			</Box>
		</nav>
	);
};
