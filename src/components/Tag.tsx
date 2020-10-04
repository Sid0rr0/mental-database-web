import { Box } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useTags } from "../utils/TagContext";

interface TagProps {
	name: string;
	noBorder?: boolean;
}
const Tag: React.FC<TagProps> = ({ name, noBorder }) => {
	const [bgColor, setBgColor] = useState("");
	const tagsContext = useTags();
	const tags = tagsContext?.tags;

	const handleSelect = () => {
		if (tags?.includes(name)) {
			tagsContext?.deleteTag(name);
			setBgColor("");
		} else {
			tagsContext?.addTag(name);
			setBgColor("#00F");
		}
	};

	useEffect(() => {
		if (tags?.includes(name)) {
			setBgColor("#00F");
		} else {
			setBgColor("");
		}
	});

	return (
		<Box
			as="button"
			rounded="20px"
			border={noBorder ? "" : bgColor === "" ? "0.5px solid #000" : ""}
			display="flex"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			p={1}
			m={1}
			_active={{ outline: "none" }}
			_focus={{ outline: "none" }}
			cursor="pointer"
			onClick={handleSelect}
			bgColor={bgColor || "#FFF"}
			color={bgColor === "" ? "#000" : "#FFF"}
		>
			{/* {name.charAt(0).toUpperCase() + name.slice(1)} */ name}
		</Box>
	);
};

export default Tag;
