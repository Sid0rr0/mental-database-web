import CollapseBubble from "./CollapseBubble";
import TagContainer from "../components/TagContainer";
import { Heading, Text, Box, Button } from "@chakra-ui/core";

const Database: React.FC = () => {
	return (
		<>
			<Heading pt="-5em" fontWeight="normal">
				Databáze
			</Heading>
			<Box fontSize="sm" mb={4}>
				<Text textAlign="center">
					Zadejte tagy v kategoriích podle vašich požadavků.
				</Text>
				<Text textAlign="center">Nemusíte vyplňovat každou sekci.</Text>
			</Box>
			<TagContainer />
			<CollapseBubble
				title="Odborník"
				tags={[
					"Psychiatr",
					"Klinický psycholog",
					"Psychoterapeut",
					"Psycholog",
				]}
			/>
			<CollapseBubble
				title="Dostupnost"
				tags={["Volná místa", "Obsazená místa"]}
			/>
			<CollapseBubble
				title="Příznaky"
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
				textInput={true}
			/>
			<CollapseBubble
				title="Duševní porucha"
				tags={[
					"Anxiózní (vyhýbavá) osobnost",
					"Disociální porucha osobnosti",
					"Bipolární afektivní porucha",
					"Disociativní (konverzní) poruchy",
					"Emočně nestabilní porucha osobnosti",
					"Abúzus",
					"Poruchy příjmu potravy",
					"Manická fáze",
					"Generalizovaná úzkostná porucha",
					"Nutkavé a impulzivní poruchy",
					"Periodická depresivní porucha",
					"Obsedantně-nutkavá porucha",
					"Panická porucha",
					"Perzistentní afektivní poruchy",
					"Posttraumatická stresová porucha",
					"Poruchy s trvalými bludy",
					"Sexuální poruchy",
					"Dystimie",
					"Specifické (izolované) fobie",
					"Neorganické poruchy spánku",
					"Sociální fobie",
					"Somatoformní poruchy",
				]}
			/>
			<CollapseBubble
				title="Místo"
				tags={["Praha", "Brno", "Olomouc", "Karlovy Vary", "Ostrava"]}
				textInput={true}
			/>
			<CollapseBubble
				title="Pojišťovna"
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
			<CollapseBubble title="Cena" tags={[]} slider={true} />
			<CollapseBubble
				title="Typ terapie"
				tags={[
					"Individuální",
					"Skupinová",
					"Dětská/pro dospívající",
					"Rodinná",
					"Párová",
				]}
			/>
			<CollapseBubble
				title="Psychoterapeutický směr"
				tags={[
					"Kognitivně behaviorální terapie",
					"Psychoanalýza",
					"Satiterapie",
					"Humanistická psychoterapie",
					"Systemická terapie",
					"Transpersonální terapie",
					"Satirovská transformační terapie",
					"Gestalt terapie",
					"Komunikační terapie",
					"Adlerovská psychoterapie",
					"Jungovská psychoterapie",
					"Dynamická a interpersonální terapie",
					"Rogersovská psychoterapie",
					"Existenciální psychoterapie",
					"Kognitivní psychoterapie",
					"Procesorientovaná terapie",
				]}
			/>
			<CollapseBubble
				title="Podpůrné a jiné organizace"
				tags={[
					"Podpůrné a jiné organizace",
					"Pacientské organizace",
					"Neziskové organizace",
				]}
			/>
			<CollapseBubble title="Pohlaví" tags={["Žena", "Muž"]} />
			<CollapseBubble
				title="Gender"
				tags={[
					"Cis žena",
					"Cis muž",
					"Jiné",
					"Nonbinary",
					"Genderfluid",
					"Transgender",
				]}
			/>
			<CollapseBubble
				title="Forma psychoterapie"
				tags={["Osobní sezení", "Online sezení"]}
			/>
			<CollapseBubble
				title="Věk"
				tags={[]}
				slider={true}
				sliderType="age"
			/>
			<CollapseBubble
				title="Typ platby"
				tags={["Hotově", "Převodem", "Kartou", "Předplatné"]}
			/>
			<CollapseBubble title="Jiné kritérium" tags={[]} textInput={true} />
			<Button
				rounded={["1rem", "2rem", "3rem", "4rem"]}
				w={["21rem", "22rem", "23rem", "24rem"]}
				color="#FFF"
				bgColor="#00F"
				_active={{ bgColor: "#00F" }}
				_focus={{ bgColor: "#00F" }}
			>
				Zobrazit výsledky
			</Button>
		</>
	);
};

export default Database;
