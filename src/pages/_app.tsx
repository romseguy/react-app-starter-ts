import "./styles.css";
import { ThemeProvider } from "components/theme-provider";
import { initializeStore, Provider as StateProvider } from "tree";

const App = ({
	Component,
	cookies,
	pageProps: { isMobile, snapshot, session, ...pageProps },
	...props
}: any) => {
	const store = initializeStore(snapshot);

	return (
		<ThemeProvider cookies={cookies} isMobile={isMobile}>
			<StateProvider value={store}>
				<Component {...pageProps} />
			</StateProvider>
		</ThemeProvider>
	);
};

App.getInitialProps = async ({ Component, ctx }: any) => {
	const { req, res } = ctx;

	const headers = req?.headers;
	const cookies = headers?.cookie;

	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	return {
		cookies,
		pageProps,
	};
};

export default App;
