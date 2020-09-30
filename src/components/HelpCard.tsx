import { Stack, Text } from "@chakra-ui/core";

interface HelpCardProps {
	title: string;
	numbers: string[];
	open: string[];
}

const HelpCard: React.FC<HelpCardProps> = ({ title, numbers, open }) => {
	return (
		<Stack align="center" my={5} textAlign="center">
			<Text>{title}</Text>
			{numbers.map(number => (
				<Text key={number}>{number}</Text>
			))}
			{open.map(op => (
				<Text fontSize="xs" key={op}>
					{op}
				</Text>
			))}
		</Stack>
	);
};

export default HelpCard;
