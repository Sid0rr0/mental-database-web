import { Button } from "@chakra-ui/core";
import Link from "next/link";

//ButtonProps not working
interface BigButtonProps {
	text: string;
	link: string;
	w: {};
}

const BigButton: React.FC<BigButtonProps> = ({ text, link, w }) => {
	return (
		<Button
			rounded={["1rem", "2rem", "3rem", "4rem"]}
			w={w}
			h={["2.5rem", "3rem", "3.5rem", "4rem"]}
			fontSize={["2xl", "3xl", "4xl", "5xl"]}
		>
			<Link href={link}>
				<a>{text}</a>
			</Link>
		</Button>
	);
};

export default BigButton;
