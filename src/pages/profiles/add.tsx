import { useSession } from "utils/hooks/useSession"; // import { DevTool } from "@hookform/devtools";
import Layout from "components/layout";
import AccessDenied from "components/access-denied";
import { isServer } from "utils/isServer";
import { PageTitle } from "components/page-title";

import { ProfileForm } from "components/profile-form";
import { getSession } from "utils/getSession";

// registerLocale("fr", fr);
// setDefaultLocale("fr");

export default function Page(props: any) {
  const { data: session = props.session, loading } = useSession();

  if (loading && !isServer) return null;

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <PageTitle>Ajouter une nouvelle fiche profile</PageTitle>

        <ProfileForm />
      </Layout>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
}
