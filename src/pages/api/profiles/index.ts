import nextConnect from "next-connect";
import middleware from "utils/middlewares/database";
import { getSession } from "utils/getSession";
import { useSession } from "utils/hooks/useSession";
import { createServerError } from "utils/mongoose";

const handler = nextConnect();

handler.use(middleware);

handler.get(async function getProfiles(req: any, res: any) {
	const session = await getSession({ req });

	if (!session) {
		res.send({ error: "Vous devez être identifié pour accéder à ce contenu." });
	} else {
		try {
			const profiles = await req.models.Profile.find({});
			res.json({ data: profiles });
		} catch (error) {
			createServerError(error);
		}
	}
});

handler.post(async function postProfile(req: any, res: any) {
	const session = await getSession({ req });

	if (!session) {
		res.send({ error: "Vous devez être identifié pour accéder à ce contenu." });
	} else {
		try {
			const { firstname, lastname, birthdate } = req.body;
			const profile = await req.models.Profile.create({
				firstname,
				lastname,
				birthdate,
			});
			res.status(200).json(profile);
		} catch (error) {
			res.status(400).json(createServerError(error));
		}
	}
});

export default handler;
