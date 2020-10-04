import { Heading, Stack, Text } from "@chakra-ui/core";
import SelectTagContainer from "../SelectTagContainer";
import TagContainer from "../TagContainer";
import TextInput from "../TextInput";

interface DiagnosisProps {}
const Diagnosis: React.FC<DiagnosisProps> = ({}) => {
	return (
		<Stack pb="5rem" fontSize="xs">
			<Heading fontSize="xl" fontWeight="normal">
				Jaké máte duševní potíže? Jaké jsou vaše příznaky?
			</Heading>
			<Text>
				Nemusí vyplnit obě kategorie, stačí například několik příznaků.
			</Text>
			<TagContainer />
			<Text>Příznaky</Text>
			<TextInput />
			<SelectTagContainer
				tags={[
					"Strach",
					"Zhoršená nálada",
					"Halucinace",
					"Nechutenství",
					"Narušený spánek",
					"Závislost na alkoholu",
					"Pocit viny",
					"Únava",
					"Snížené sebevědomí",
					"Pocit beznaděje",
					"Snížená koncentrace",
					"Pocit prázdnoty",
					"Stres",
					"Úzkost",
					"Ztráta zájmu o zábavu a zájmy",
					"Nadměrné pocení",
					"Partnerské potíže",
					"Závratě",
					"Nervozita",
					"Osamělost",
				]}
			/>
			<Text>Duševní porucha</Text>
			<TextInput />
			<SelectTagContainer
				tags={[
					"Poruchy nálady (depresivní fáze)",
					"Sociální fóbie",
					"Obsedantně-nutkavá porucha",
					"Panická porucha",
					"Posttraumatická stresová porucha",
					"Sexuální poruchy",
					"Specifické (izolované) fóbie",
					"Somatoformní poruchy",
					"Poruchy s trvalými bludy",
					"Neorganické poruchy spánku",
				]}
			/>
		</Stack>
	);
};

export default Diagnosis;
