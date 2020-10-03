import { Text } from "@chakra-ui/core";

interface RoundedButtonProps {
	text: string;
	clicked: boolean;
}
const RoundedButton: React.FC<RoundedButtonProps> = ({ text, clicked }) => {
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
		>
			{text}
		</Text>
	);
};

export default RoundedButton;
