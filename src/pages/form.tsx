import { Box, Text } from "@chakra-ui/core";
import { useState } from "react";
import ArrowBack from "../components/ArrowBack";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Insurance from "../components/questionaire/Insurance";
import Location from "../components/questionaire/Location";
import Specialitst from "../components/questionaire/Specialitst";
import QuestionaireProfiles from "../components/questionaire/QuestionaireProfiles";
import Diagnosis from "../components/questionaire/diagnosis";

interface formProps {}
const form: React.FC<formProps> = ({}) => {
	const [step, setStep] = useState(0);

	const handleStep = () => {
		if (step < 4) setStep(prevStep => prevStep + 1);
	};

	return (
		<>
			<Navbar />

			<Main px={2}>
				{step === 0 && <Diagnosis />}
				{step === 1 && <Specialitst />}
				{step === 2 && <Insurance />}
				{step === 3 && <Location />}
				{step === 4 && <QuestionaireProfiles version={2} />}
				<Text
					as="button"
					position="fixed"
					top="80%"
					left="5%"
					w="90%"
					bgColor="#FFF"
					rounded="1em"
					fontSize="xl"
					onClick={handleStep}
				>
					Pokračovat ve vyhledávání
				</Text>
				{step > 0 && (
					<Box
						position="fixed"
						top="91%"
						left="5%"
						onClick={() => setStep(prevStep => prevStep - 1)}
					>
						<ArrowBack />
					</Box>
				)}
			</Main>
		</>
	);
};

export default form;
