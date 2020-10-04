import {
	Button,
	Box,
	Collapse,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from "@chakra-ui/core";
import { useState } from "react";
import Tag from "./Tag";
import TextInput from "./TextInput";

interface CollapseBubbleProps {
	title: string;
	tags: string[];
	slider?: boolean;
	sliderType?: string;
	textInput?: boolean;
}
const CollapseBubble: React.FC<CollapseBubbleProps> = ({
	title,
	tags,
	slider,
	sliderType,
	textInput,
}) => {
	const [show, setShow] = useState(false);
	const [ageSlider, setAgeSlider] = useState(25);
	const [priceSlider, setPriceSlider] = useState(500);

	const handleToggle = () => {
		setShow(!show);
	};
	//todo make responi
	return (
		<>
			<Button
				onClick={handleToggle}
				bg="#FFF"
				rounded={["1rem", "2rem", "3rem", "4rem"]}
				w={["21rem", "22rem", "23rem", "24rem"]}
				_focus={{ outline: "0", bgColor: "#FFF" }}
				_hover={{ bgColor: "#FFF" }}
				_active={{ bgColor: "#FFF" }}
				fontWeight="normal"
				fontSize="2xl"
			>
				{title}
			</Button>

			<Collapse isOpen={show} mt="-6" mb={4}>
				<Box
					display="flex"
					flexWrap="wrap"
					alignItems="center"
					justifyContent="center"
					w={["21rem", "22rem", "23rem", "24rem"]}
					bg="#FFF"
					pt={5}
					pb={3}
					roundedBottom={["0.75rem", "1rem", "1.25rem", "1.5rem"]}
				>
					{slider === true ? (
						sliderType === "age" ? (
							<Slider
								size="lg"
								defaultValue={ageSlider}
								min={15}
								max={99}
								w="80%"
								my={5}
								onChange={newAge => setAgeSlider(newAge)}
							>
								<SliderTrack h="1px" bgColor="#000" />
								<SliderFilledTrack h={2} />
								<SliderThumb
									_focus={{ outline: "0" }}
									w={39}
									h={4}
									bgColor="#000"
								>
									<Box
										mb={-10}
										display="flex"
										fontSize="0.6em"
									>
										<Box>{ageSlider}</Box>
										<Box ml={1}>let</Box>
									</Box>
								</SliderThumb>
							</Slider>
						) : (
							<Slider
								size="lg"
								defaultValue={priceSlider}
								min={0}
								max={2000}
								step={100}
								w="80%"
								my={5}
								onChange={newPrice => setPriceSlider(newPrice)}
							>
								<SliderTrack h="1px" bgColor="#000" />
								<SliderFilledTrack h={2} />
								<SliderThumb
									_focus={{ outline: "0" }}
									w={39}
									h={4}
									bgColor="#000"
								>
									<Box mb={-10} fontSize="0.6em">
										{priceSlider}
									</Box>
								</SliderThumb>
							</Slider>
						)
					) : (
						<>
							{textInput ? <TextInput /> : null}
							{tags.map(tag => (
								<Tag key={tag} name={tag} />
							))}
						</>
					)}
				</Box>
			</Collapse>
		</>
	);
};

export default CollapseBubble;
