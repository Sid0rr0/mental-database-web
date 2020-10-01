import { ChakraProvider } from "@chakra-ui/core";
import theme from "../theme";
import "../styles/styles.css";
import { AppProps } from "next/app";
import { TagProvider } from "../utils/TagContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TagProvider>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</TagProvider>
	);
}

export default MyApp;
