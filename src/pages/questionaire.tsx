import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Heading, Box, Text, Stack } from "@chakra-ui/core";
import { useState } from "react";
import * as d from "../data/questions.json";
import * as dis from "../data/diseases.json";
import RoundedButton from "../components/RoundedButton";
import Link from "next/link";
import { useTags } from "../utils/TagContext";
import ArrowBack from "../components/ArrowBack";

interface Data {
	id: number;
	cz: String;
	en: string;
	disease: number;
}

const questionaire: React.FC = () => {
	const [step, setStep] = useState(0);
	const [diseases, setDiseases] = useState<Array<number>>([]);
	const [selected, setSelected] = useState<Array<number>>([]);
	const tags = useTags();

	const addTags = () => {
		const uniqueDiseases = [...new Set(diseases)];
		console.log({ uniqueDiseases });
		uniqueDiseases.map(uniqueDisease =>
			dis.data[uniqueDisease - 1].tags.cz.map(tag => tags?.addTag(tag))
		);

		uniqueDiseases.map(uniqueDisease =>
			tags?.addDisease(uniqueDisease - 1)
		);
	};

	const handleClick = (data: Data) => {
		if (diseases.includes(data.disease) && selected.includes(data.id)) {
			const newDiseases = diseases.filter(
				disease => disease !== data.disease
			);
			setDiseases(newDiseases);
		} else {
			//tags id start from 1 but array form 0
			setDiseases(oldDiseases => [...oldDiseases, data.disease]);
		}

		if (selected.includes(data.id)) {
			const newSelected = selected.filter(select => select !== data.id);
			setSelected(newSelected);
		} else {
			setSelected(oldSeleted => [...oldSeleted, data.id]);
		}
	};

	const page = () => {
		const content = [];
		for (let i = 0; i < d.data.length; i += 4) {
			content.push(
				<Stack spacing={4} w="90%">
					<Box onClick={() => handleClick(d.data[i])}>
						<RoundedButton
							text={d.data[i].cz}
							clicked={selected.includes(d.data[i].id)}
						/>
					</Box>
					<Box onClick={() => handleClick(d.data[i + 1])}>
						<RoundedButton
							text={d.data[i + 1].cz}
							clicked={selected.includes(d.data[i + 1].id)}
						/>
					</Box>
					<Box onClick={() => handleClick(d.data[i + 2])}>
						<RoundedButton
							text={d.data[i + 2].cz}
							clicked={selected.includes(d.data[i + 2].id)}
						/>
					</Box>
					{i < 60 ? (
						<Box onClick={() => handleClick(d.data[i + 3])}>
							<RoundedButton
								text={d.data[i + 3].cz}
								clicked={selected.includes(d.data[i + 3].id)}
							/>
						</Box>
					) : null}
				</Stack>
			);
		}
		return content;
	};

	const prevStep = () => {
		if (step > 0) setStep(prevStep => prevStep - 1);
	};

	const nextStep = () => {
		if (step < 15) setStep(prevStep => prevStep + 1);
	};

	return (
		<>
			<Navbar />
			<Main
				align="center"
				fontSize="lg"
				pt={["3.5rem", "6rem", "7rem", "8rem"]}
				pb="1rem"
			>
				<Stack as="section" align="center">
					<Heading fontWeight="normal">Dotazník</Heading>
					{step === 0 ? (
						<>
							<Text textAlign="center" fontSize="xs">
								Vyberte výroky, které pro vás platí. Neoznačujte
								výroky, které pro vás neplatí. Po vyplnění
								dotazníku se vám vygenerují tagy, které vám
								pomohou k nalezení odborníka.
							</Text>
							<Text fontSize="xs">
								Dotazník trvá vyplnit zhruba 10 minut.
							</Text>
						</>
					) : null}

					<Stack fontSize="xl" align="center" mb="5em">
						{page()[step]}
						<Box
							display="flex"
							flexDir="row"
							justifyContent="space-between"
							alignItems=""
							w="90%"
							position="fixed"
							left="5%"
							top="91%"
						>
							<Box onClick={prevStep}>
								<ArrowBack />
							</Box>
							<Text>{step + 1}/16</Text>
							<Box
								as="button"
								_focus={{ outline: "none" }}
								onClick={nextStep}
								w={5}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 39.71 85.92"
								>
									<title>arrow forward</title>
									<path
										d="M34.44,8.69,70,46.28A5.68,5.68,0,0,1,70.07,54L34.44,92.56"
										transform="translate(-33.34 -7.66)"
										fill="none"
										stroke="black"
										strokeMiterlimit="10"
										strokeWidth="3"
									/>
								</svg>
							</Box>
						</Box>
					</Stack>
					{step === 15 ? (
						<Text
							as="button"
							bgColor="#00F"
							color="#FFF"
							w="90%"
							fontSize="xl"
							rounded={["0.8rem", "2rem", "3rem", "4rem"]}
							onClick={() => addTags()}
						>
							<Link href="questionaire/result">
								Výsledky vašeho datazníku
							</Link>
						</Text>
					) : null}
				</Stack>
			</Main>
		</>
	);
};

export default questionaire;
