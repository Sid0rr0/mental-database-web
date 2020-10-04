import { Heading, Stack, Text } from "@chakra-ui/core";
import CollapseBubble from "../CollapseBubble";
import TagContainer from "../TagContainer";

interface InsuranceProps {}
const Insurance: React.FC<InsuranceProps> = ({}) => {
	return (
		<Stack as="section" fontSize="sm" align="center" pb="5rem">
			<Heading as="h1" fontWeight="normal">
				Jaký typ zdravotního pojištění máte?
			</Heading>
			<TagContainer />
			<CollapseBubble
				title="Vyberte typ pojišťovny"
				tags={[
					"Všeobecná zdravotní pojišťovna České republiky",
					"Zdravotní pojišťovna ministerstva vnitra České republiky",
					"Česká průmyslová zdravotní pojišťovna",
					"Vojenská zdravotní pojišťovna České republiky",
					"Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví",
					"Revírní bratrská pokladna, zdravotní pojišťovna",
					"Zaměstnanecká pojišťovna Škoda",
				]}
			/>
			<Text>Výběr...</Text>
		</Stack>
	);
};

export default Insurance;
