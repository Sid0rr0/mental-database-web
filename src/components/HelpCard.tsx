import { Stack, Text } from "@chakra-ui/core";

interface HelpCardProps {
	title: string;
	number: string;
	open: string;
}

const HelpCard: React.FC<HelpCardProps> = ({ title, number, open }) => {
	return (
		<Stack align="center" my={5} textAlign="center">
			<Text>{title}</Text>
			<Text>{number}</Text>
			<Text fontSize="xs">{open}</Text>
		</Stack>
	);
};

export default HelpCard;
