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
					{show ? (
						<Box w="1.2em">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 84.58 38.02"
							>
								<title>arrow up-02</title>
								<path
									d="M8.1,69.2,45.7,33.6a5.69,5.69,0,0,1,7.7-.1L92,69.2"
									transform="translate(-7.76 -31.55)"
									fill="none"
									stroke="#000"
									strokeWidth="4px"
									strokeMiterlimit="10"
								/>
							</svg>
						</Box>
					) : (
						<Box w="1.2em">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 84.58 38.02"
							>
								<title>arrow down</title>
								<path
									d="M92,31.4,54.4,67a5.69,5.69,0,0,1-7.7.1L8.1,31.4"
									transform="translate(-7.76 -31.03)"
									fill="none"
									stroke="#000"
									strokeWidth="4px"
									strokeMiterlimit="10"
								/>
							</svg>
						</Box>
					)}
				</Box>
			</Box>
			<Collapse isOpen={show}>
				<Text>{explenation}</Text>
			</Collapse>
		</>
	);
};

export default SpecialistButton;
