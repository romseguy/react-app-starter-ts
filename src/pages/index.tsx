import { getSession } from "utils/getSession";
import Layout from "components/layout";

export default function Page({ session }: any) {
	return <Layout>Welcome {session ? session.user.name : "guest"}</Layout>;
}

export async function getServerSideProps(context: any) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
