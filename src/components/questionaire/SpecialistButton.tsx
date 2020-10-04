import { Box, Collapse, Text } from "@chakra-ui/core";
import { useState } from "react";
import { useTags } from "../../utils/TagContext";
import RoundedButton from "../RoundedButton";

interface SpecialistButtonProps {
	title: string;
	explenation: string;
}
const SpecialistButton: React.FC<SpecialistButtonProps> = ({
	title,
	explenation,
}) => {
	const [show, setShow] = useState(false);
	const context = useTags();

	const handleSelection = () => {
		if (context?.tags.includes(title)) {
			context.deleteTag(title);
		} else {
			context?.addTag(title);
		}
	};

	return (
		<>
			<Box display="flex">
				<Box onClick={handleSelection}>
					<RoundedButton
						text={title}
						fontSize="xl"
						clicked={context?.tags.includes(title)}
					/>
				</Box>
				<Box
					as="button"
					onClick={() => setShow((prevShow: boolean) => !prevShow)}
					mx={2}
					w="1em"
					_focus={{ outline: "none" }}
				>
					{show ? "^" : "v"}
				</Box>
			</Box>
			<Collapse isOpen={show}>
				<Text>{explenation}</Text>
			</Collapse>
		</>
	);
};

export default SpecialistButton;
