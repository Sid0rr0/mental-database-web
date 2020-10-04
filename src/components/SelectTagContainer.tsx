import { Box } from "@chakra-ui/core";
import Tag from "./Tag";

interface SelectTagContainerProps {
	tags: string[];
}
const SelectTagContainer: React.FC<SelectTagContainerProps> = ({ tags }) => {
	return (
		<Box display="flex" flexWrap="wrap">
			{tags.map((tag: string) => (
				<Tag key={tag + "."} name={tag} noBorder={true} />
			))}
		</Box>
	);
};

export default SelectTagContainer;
