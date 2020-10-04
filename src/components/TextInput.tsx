import { Input } from "@chakra-ui/core";

interface TextInputProps {}
const TextInput: React.FC<TextInputProps> = ({}) => {
	{
		/* todo: switch to autocomplete input */
	}
	return (
		<Input
			background="transparent"
			border="none"
			borderBottom="2px solid #000"
			variant="unstyled"
			rounded="0px"
			w="90%"
			alignSelf="center"
			mb={2}
		/>
	);
};

export default TextInput;
