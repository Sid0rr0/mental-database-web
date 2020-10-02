import { Box, Button } from "@chakra-ui/core";
import { useTags } from "../utils/TagContext";

const TagContainer: React.FC = ({}) => {
	//desctructuring causes error
	const tagsContext = useTags();

	return (
		<Box
			w={["21rem", "22rem", "23rem", "24rem"]}
			/* position="fixed"
			left="0"
			top={["3em", "3em", "4em", "5em"]} */
			display="flex"
			alignItems="center"
			justifyContent="center"
			zIndex="3"
			bgColor="none"
			flexWrap="wrap"
			pb={1}
		>
			{tagsContext?.tags.map(tag => (
				<Box
					mx={2}
					my={1}
					px={2}
					key={tag}
					bgColor="#FFF"
					color="#000"
					rounded="1em"
					fontSize="sm"
					textAlign="center"
					display="flex"
				>
					{tag}
					<Box
						as="button"
						ml={1}
						onClick={() => tagsContext?.deleteTag(tag)}
						cursor="pointer"
					>
						x
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default TagContainer;
