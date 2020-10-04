import { Heading, Text, Stack } from "@chakra-ui/core";
import * as dis from "../../data/diseases.json";
import { useTags } from "../../utils/TagContext";
import TagContainer from "../TagContainer";

interface QuestionaireResultsProps {}
const QuestionaireResults: React.FC<QuestionaireResultsProps> = ({}) => {
	const context = useTags();
	const diseases = context?.diseases;
	console.log({ diseases });
	return (
		<>
			<Heading fontWeight="normal">Orientační výsledky dotazníku</Heading>
			<TagContainer />
			<Text>
				Tento dotazník představuje pouze orientační diagnózu duševních
				potíží. Přesné vyhodnocení vašeho duševního stavu vyžaduje
				vyšetření od klinického psychologa nebo psychiatra.
			</Text>
			<Text>
				Podle vámi vyplněného dotazníku máte několik znaků této poruchy:
			</Text>

			{diseases?.map(disease => (
				<Text fontStyle="italic" key={dis.data[disease].title.cz}>
					{dis.data[disease].title.cz}
				</Text>
			))}

			<Stack pb="6rem">
				<Heading fontSize="xl" fontWeight="normal">
					Vysvětlení poruchy:
				</Heading>

				{diseases?.map(disease => (
					<Stack as="section" key={dis.data[disease].id}>
						{diseases?.length > 1 ? (
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
