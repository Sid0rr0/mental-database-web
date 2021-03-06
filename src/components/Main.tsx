import { Stack, StackProps } from "@chakra-ui/core";

const Main = (props: StackProps) => (
	<Stack
		as="main"
		width="100%"
		minH="100vh"
		py={["5rem", "6rem", "7rem", "8rem"]}
		{...props}
		background="repeating-linear-gradient(180deg, #F9F09B, #29ABE2, #F9F09B 1400px )"
	/>
);

export default Main;
