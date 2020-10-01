import { Box } from "@chakra-ui/core";
import { useTags } from "../utils/TagContext";

const TagContainer: React.FC = ({}) => {
	//desctructuring causes error
	const tagsContext = useTags();

	return (
		<Box
			w="100%"
			position="fixed"
			left="0"
			top={["3em", "3em", "4em", "5em"]}
			display="flex"
			alignItems="center"
			justifyContent="center"
			zIndex="3"
			bgColor="yellow"
			flexWrap="wrap"
			pb={1}
		>
			{tagsContext?.tags.map(tag => (
				<Box
					mx={2}
					my={1}
					px={2}
					key={tag}
					bgColor="#000"
					color="#FFF"
					rounded="1em"
					fontSize="sm"
					textAlign="center"
				>
					{tag}
				</Box>
			))}
		</Box>
	);
};

export default TagContainer;
