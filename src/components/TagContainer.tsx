import { Box } from "@chakra-ui/core";
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
						w={2}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 34.14 85.6"
						>
							<title>delete tag</title>
							<path
								d="M34.48,8.37l13.6,39.08c.82,2.3,2.07,2.27,2.89,0L65.67,8.37"
								transform="translate(-33.06 -7.84)"
								fill="none"
								stroke="black"
								strokeMiterlimit="10"
								strokeWidth="3"
							/>
							<path
								d="M34.61,92.91,48.22,53.82c.81-2.3,2.06-2.26,2.89,0L65.8,92.91"
								transform="translate(-33.06 -7.84)"
								fill="none"
								stroke="black"
								strokeMiterlimit="10"
								strokeWidth="3"
							/>
						</svg>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default TagContainer;
