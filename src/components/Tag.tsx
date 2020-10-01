import { Box } from "@chakra-ui/core";
import { useState } from "react";
import { useTags } from "../utils/TagContext";

interface TagProps {
	name: string;
}
const Tag: React.FC<TagProps> = ({ name }) => {
	const [shadow, setShadow] = useState("");
	const tagsContext = useTags();

	const handleSelect = () => {
		const tags = tagsContext?.tags;
		if (tags?.includes(name)) {
			tagsContext?.deleteTag(name);
			setShadow("");
		} else {
			tagsContext?.addTag(name);
			setShadow("2px 2px 8px 4px rgba(0,0,0,0.75)");
		}
	};

	return (
		<Box
			border="1px"
			rounded="20px"
			borderColor="black.400"
			display="flex"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			px={2}
			py={1}
			m={2}
			_hover={{ boxShadow: "2px 2px 8px 4px rgba(0,0,0,0.75)" }}
			cursor="pointer"
			onClick={handleSelect}
			boxShadow={shadow}
		>
			{/* {name.charAt(0).toUpperCase() + name.slice(1)} */ name}
		</Box>
	);
};

export default Tag;
