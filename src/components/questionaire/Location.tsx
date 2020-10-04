import { Heading, Stack } from "@chakra-ui/core";
import SelectTagContainer from "../SelectTagContainer";
import TagContainer from "../TagContainer";
import TextInput from "../TextInput";
interface LocationProps {}
const Location: React.FC<LocationProps> = ({}) => {
	return (
		<Stack as="section" fontSize="xl" align="center" pb="5rem">
			<Heading as="h1" fontWeight="normal">
				V jakém městě hledáte duševní pomoc?
			</Heading>
			<TagContainer />
			<TextInput />
			<SelectTagContainer
				tags={["Praha", "Brno", "Olomouc", "Cheb", "Ostrava"]}
			/>
		</Stack>
	);
};

export default Location;
