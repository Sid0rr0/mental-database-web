import { Heading, Stack } from "@chakra-ui/core";

import TagContainer from "../TagContainer";
import SpecialistButton from "./SpecialistButton";

interface SpecialitstProps {}
const Specialitst: React.FC<SpecialitstProps> = ({}) => {
	return (
		<Stack pb="5rem">
			<Heading as="h1" fontWeight="normal">
				Jakého odborníka hledáte?
			</Heading>
			<TagContainer />
			<SpecialistButton
				title="Psychiatr"
				explenation="Lékař/ka, vystudoval/a psychiatrii. Může předepisovat léky.
					Psychiatři se zabývají především pacienty s těžším duševním
					onemocněním."
			/>
			<SpecialistButton
				title="Klinický psycholog"
				explenation="Vystudoval/a psychologii na vysoké škole a absolvoval/a atestační vzdělání, kterým se stal/a pracovníkem ve zdravotnictví. Nepředepisuje léky. Může uzavřít smlouvu se zdravotní pojišťovnou.
"
			/>
			<SpecialistButton
				title="Psychoterapeut"
				explenation="Absolvoval/a akreditovaný psychoterapeutický výcvik určitého směru. Nepředepisuje léky. Jeho/její služby nejsou hrazené zdravotními pojišťovnami.
"
			/>
			<SpecialistButton
				title="Psycholog"
				explenation="Vystudoval/a obor psychologie na vysoké škole, ale neabsolvoval/a psychoterapeutický výcvik. Není hrazený zdravotním pojištěním.
"
			/>
		</Stack>
	);
};

export default Specialitst;
