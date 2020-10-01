import { Stack, StackProps } from "@chakra-ui/core";

const Main = (props: StackProps) => (
	<Stack
		as="main"
		width="100%"
		py={["10rem", "8em", "10em", "12em"]}
		{...props}
		background="repeating-linear-gradient(180deg, #F9F09B, #29ABE2, #F9F09B 40% )"
	/>
);

export default Main;
