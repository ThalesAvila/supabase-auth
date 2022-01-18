import { supabase } from "../supabase-client";

const Protected = ({ user }) => {
  console.log({ user });
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <h2>Hello from protected route</h2>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  console.log({ user });

  if (!user) {
    return { props: {}, redirect: { destination: "/sign-in" } };
  }

  return { props: { user } };
}

export default Protected;
