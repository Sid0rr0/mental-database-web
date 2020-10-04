import { Text } from "@chakra-ui/core";

interface RoundedButtonProps {
	text: string;
	clicked?: boolean;
	fontSize?: string;
}
const RoundedButton: React.FC<RoundedButtonProps> = ({
	text,
	clicked,
	fontSize,
}) => {
	return (
		<Text
			as="button"
			rounded={["0.8rem", "2rem", "3rem", "4rem"]}
			bgColor={clicked ? "#00F" : "#FFF"}
			color={clicked ? "#FFF" : "#000"}
			py={1.5}
			px={1}
			_focus={{ outline: "none" }}
			_active={{ bgColor: "none" }}
			fontSize={fontSize}
			textAlign="left"
		>
			{text}
		</Text>
	);
};

export default RoundedButton;
