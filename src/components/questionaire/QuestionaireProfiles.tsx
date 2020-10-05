import { Heading, Stack } from "@chakra-ui/core";

import TagContainer from "../TagContainer";
import ProfileCard from "./ProfileCard";

interface QuestionaireProfilesProps {
	version?: number;
}
const QuestionaireProfiles: React.FC<QuestionaireProfilesProps> = ({
	version,
}) => {
	return (
		<Stack as="section" fontSize="sm" align="center" pb="5rem">
			<Heading as="h1" fontWeight="normal">
				Výsledky vyhledávání
			</Heading>
			<TagContainer />
			{version === 1 ? (
				<>
					<ProfileCard
						name="Tereza Nováková"
						img="/images/1-1.jpg"
						link=""
					/>
					<ProfileCard
						name="Ondřej Krejčí"
						img="/images/1-2.jpg"
						link="/profiles/profile"
					/>
					<ProfileCard
						name="Dana Malá"
						img="/images/1-3.jpg"
						link=""
					/>
					<ProfileCard
						name="Jakub Černý"
						img="/images/1-4.jpg"
						link=""
					/>
					<ProfileCard
						name="Eva Procházková"
						img="/images/1-5.jpg"
						link=""
					/>
					<ProfileCard
						name="Jiří Veselý"
						img="/images/1-6.jpg"
						link=""
					/>
				</>
			) : (
				<>
					<ProfileCard
						name="Anna Nováková"
						img="/images/2-1.jpg"
						link=""
					/>
					<ProfileCard
						name="Josef Nový"
						img="/images/2-2.jpg"
						link=""
					/>
					<ProfileCard
						name="Lenka Dvořáková"
						img="/images/2-3.jpg"
						link=""
					/>
					<ProfileCard
						name="Jana Nováková"
						img="/images/2-4.jpg"
						link=""
					/>
					<ProfileCard
						name="Jan Novák"
						img="/images/2-5.jpg"
						link=""
					/>
					<ProfileCard
						name="Jitka Svobodová"
						img="/images/2-6.jpg"
						link=""
					/>
				</>
			)}
		</Stack>
	);
};

export default QuestionaireProfiles;
