import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div>
      <Link href="/">Home</Link>
      <div>
        {session && session.user ? (
          <div>
            <p>{session.user.name}</p>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button>Entrar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
