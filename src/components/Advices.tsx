import { List, ListItem, Heading } from "@chakra-ui/core";

const Advices: React.FC = ({}) => {
	return (
		<>
			<Heading textAlign="center" fontWeight="normal" fontSize="xl">
				Před prvním setkáním s odborníkem
			</Heading>
			<List as="ol" styleType="decimal" p={8} spacing={2}>
				<ListItem>
					Pokud se necítíte dlouhodobě psychicky doře, neváhejte a
					vyhledejte odbournou pomoc. Každý má hranice jinde.
				</ListItem>
				<ListItem>
					Pokud se sezení s odborníkem nevydaří hned napopré, nenechte
					se odradit. Vyzkoušejte jiného terapeuta.
				</ListItem>
				<ListItem>
					Terapeut nikdy svého klienta neodsuzuje, nehodnotí, přijímá
					ho takového, jaký je.
				</ListItem>
				<ListItem>
					Povinností každého terapeuta je zachovávat mlčenlivost.
				</ListItem>
				<ListItem>
					Důležité je, abyste se cítili na terapii bezpečně a do
					ničeho se nenutili.
				</ListItem>
			</List>
		</>
	);
};

export default Advices;
