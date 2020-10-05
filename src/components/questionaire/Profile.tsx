import { Box, Image, Stack, Text } from "@chakra-ui/core";

interface ProfileProps {
	expertise: string[];
	specialities: string[];
	availability: string;
	city: string;
	gender: string;
	workplace: string;
	method: string;
	name: string;
	price?: string;
}
const Profile: React.FC<ProfileProps> = ({
	expertise,
	specialities,
	availability,
	city,
	gender,
	workplace,
	method,
	name,
}) => {
	return (
		<Stack px={2}>
			<Text fontSize="3xl">{name}</Text>
			<Image src="/images/1-2.jpg" alt="Profile picture" />
			<Box
				display="flex"
				flexWrap="wrap"
				fontSize="xs"
				alignItems="center"
			>
				<Box display="flex" flexWrap="wrap">
					Odbornost:
					{expertise.map((expert: string) => (
						<Text
							ml={1}
							mb={1}
							px={1}
							bgColor="#FFF"
							rounded="1em"
							key={expert}
						>
							{expert}
						</Text>
					))}
				</Box>
				<Box display="flex" flexWrap="wrap" mr={2}>
					Dostupnost:
					<Text ml={1} mb={1} px={1} bgColor="#FFF" rounded="1em">
						{availability}
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" mr={2}>
					Město:
					<Text ml={1} mb={1} px={1} bgColor="#FFF" rounded="1em">
						{city}
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" mr={2}>
					Pohlaví:
					<Text ml={1} mb={1} px={1} bgColor="#FFF" rounded="1em">
						{gender}
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" mr={2}>
					Pracoviště:
					<Text ml={1} mb={1} px={1} bgColor="#FFF" rounded="1em">
						{workplace}
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" mr={2}>
					Psychoterapeutická metoda:
					<Text ml={1} mb={1} px={1} bgColor="#FFF" rounded="1em">
						{method}
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap">
					Odbornost:
					{specialities.map((speciality: string) => (
						<Text
							ml={1}
							mb={1}
							px={1}
							bgColor="#FFF"
							rounded="1em"
							key={speciality}
						>
							{speciality}
						</Text>
					))}
				</Box>
			</Box>
			<Box fontSize="xs" as="section">
				<Text>Web: psychologickecentrum2.cz</Text>
				<Text>Telefon: 678 456 378</Text>
				<Text>Email: jan.novak@seznam.cz</Text>
				<Text>Adresa: Náměstí míru 3, Praha</Text>
				<Text>Ordinační hodiny: Středa–Čtvrtek, 10h–17h</Text>
			</Box>
			<Box as="section">
				<Text>
					Ve zdravotnictví pracuji od roku 2003. Jsem atestovaný
					klinický psycholog s funkční specializací v psychoterapii
					působící v Praze. Mám bohaté zkušenosti s krizovou
					intervencí, psychologickým poradenstvím a psychoterapií.
					Zaměřuji se na řešení úzkostných a depresivních potíží,
					které se rozvinuly v reakci na náročné životní události,
					vývojové, osobní či vztahové krize. Vedle postupů krizové
					intervence ve své praxi uplatňuji zejména jungovsky
					orientovaný přístup a práci s psychoterapeutickou metodou
					EMDR (Eye Movement Desensitisation and Reprocessing).
				</Text>
			</Box>
			<Box as="section" fontSize="xs">
				<Text fontSize="md">Vzdělání</Text>
				<Text>Karlova Univerzita – psychologie</Text>
				<Text>
					Institut postgraduálního vzdělávání ve zdravotnictví –
					klinický psycholog
				</Text>
				<Text>Český institut pro psychotraumatologii a EDMR</Text>
			</Box>
			<Box as="section" fontSize="xs">
				<Text fontSize="md">Pracovní zkušenosti</Text>
				<Text>Psychiatrická nemocnice Horní Beřkovice</Text>
			</Box>
			<Box as="section" fontSize="xs">
				<Text fontSize="md">Adresa</Text>
				<Text>Náměstí míru 3, Praha</Text>
				<Image src="/images/map.png" alt="map" />
			</Box>
		</Stack>
	);
};

export default Profile;
