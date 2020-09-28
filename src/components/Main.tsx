import { Stack, StackProps } from "@chakra-ui/core";

const Main = (props: StackProps) => (
	<Stack
		as="main"
		width="100%"
		py={["10rem", "8em", "10em", "12em"]}
		{...props}
	/>
);

export default Main;
