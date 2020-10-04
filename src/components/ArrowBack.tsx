import { Box } from "@chakra-ui/core";

interface ArrowBackProps {}
const ArrowBack: React.FC<ArrowBackProps> = ({}) => {
	return (
		<Box as="button" _focus={{ outline: "none" }} w={5}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.73 85.92">
				<title>arrow back</title>
				<path
					d="M72.46,6.53,36.89,44.12a5.67,5.67,0,0,0-.06,7.76L72.46,90.4"
					transform="translate(-33.83 -5.5)"
					fill="none"
					stroke="black"
					strokeMiterlimit="10"
					strokeWidth="3"
				/>
			</svg>
		</Box>
	);
};

export default ArrowBack;
