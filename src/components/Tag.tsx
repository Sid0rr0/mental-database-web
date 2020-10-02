import { Box } from "@chakra-ui/core";
import { useState } from "react";
import { useTags } from "../utils/TagContext";

interface TagProps {
	name: string;
}
const Tag: React.FC<TagProps> = ({ name }) => {
	const [bgColor, setBgColor] = useState("");
	const tagsContext = useTags();

	const handleSelect = () => {
		const tags = tagsContext?.tags;
		if (tags?.includes(name)) {
			tagsContext?.deleteTag(name);
			setBgColor("");
		} else {
			tagsContext?.addTag(name);
			setBgColor("#00F");
		}
	};

	return (
		<Box
			border="1px"
			rounded="20px"
			borderColor="#000"
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
			bgColor={bgColor}
			color={bgColor === "" ? "#000" : "#FFF"}
		>
			{/* {name.charAt(0).toUpperCase() + name.slice(1)} */ name}
		</Box>
	);
};

export default Tag;
