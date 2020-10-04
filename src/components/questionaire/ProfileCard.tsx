import { Box, Text } from "@chakra-ui/core";

interface ProfileCardProps {
	name: string;
	img?: string;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ name, img }) => {
	return (
		<>
			<Box display="flex" w="98%">
				<Box w="45rem">
					<img src={img} alt="Profile picture" />
				</Box>
				<Box bgColor="#FFF" p={1}>
					<Text fontSize="xl">{name}</Text>
					<Text fontSize="xs" _after={{ content: '"..."' }}>
						Ve zdravotnictví pracuji od roku 2003. Jsem atestovaný
						klinický psycholog s funkční specializací v
						psychoterapii působící v Praze
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default ProfileCard;
