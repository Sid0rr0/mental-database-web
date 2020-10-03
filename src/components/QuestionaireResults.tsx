import { Heading, Text, Stack } from "@chakra-ui/core";
import * as dis from "../data/diseases.json";

interface QuestionaireResultsProps {
	diseases: number[];
}
const QuestionaireResults: React.FC<QuestionaireResultsProps> = ({
	diseases,
}) => {
	return (
		<>
			<Heading>Orientační výsledky dotazníku</Heading>
			<Text>
				Tento dotazník představuje pouze orientační diagnózu duševních
				potíží. Přesné vyhodnocení vašeho duševního stavu vyžaduje
				vyšetření od klinického psychologa nebo psychiatra.
			</Text>
			<Text>
				Podle vámi vyplněného dotazníku máte několik znaků této poruchy:
			</Text>

			{diseases.map(disease => (
				<Text fontStyle="italic" key={dis.data[disease].title.cz}>
					{dis.data[disease].title.cz}
				</Text>
			))}

			<Stack>
				<Heading fontSize="xl">Vysvětlení poruchy:</Heading>
				{diseases.map(disease => (
					<Stack as="section" key={dis.data[disease].id}>
						{diseases.length > 1 ? (
							<Heading as="h3" fontSize="xl">
								{dis.data[disease].title.cz}
							</Heading>
						) : null}
						<Text>{dis.data[disease].body.cz}</Text>
					</Stack>
				))}
			</Stack>
		</>
	);
};

export default QuestionaireResults;
