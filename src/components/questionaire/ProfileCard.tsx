import { Box, Text } from "@chakra-ui/core";
import Link from "next/link";

interface ProfileCardProps {
	name: string;
	img?: string;
	link: string;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ name, img, link }) => {
	return (
		<>
			<Box display="flex" w="98%">
				<Box w="45rem">
					<img src={img} alt="Profile picture" />
				</Box>
				<Box bgColor="#FFF" p={1}>
					<Text fontSize="xl">
						<Link href={link}>
							<a>{name}</a>
						</Link>
					</Text>
					<Text fontSize="xs" _after={{ content: '"..."' }}>
						<Link href={link}>
							<a>
								Ve zdravotnictví pracuji od roku 2003. Jsem
								atestovaný klinický psycholog s funkční
								specializací v psychoterapii působící v Praze
							</a>
						</Link>
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default ProfileCard;
