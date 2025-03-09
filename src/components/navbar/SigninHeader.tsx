import { UserIcon } from "@heroicons/react/24/outline";
import { auth } from "~/server/auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const SignInHeader = async () => {
  const session = await auth();

  return (
    <Avatar className="size-8">
      <AvatarImage
        src={session?.user.image ?? undefined}
        alt={session?.user.name ?? undefined}
      />
      <AvatarFallback className="rounded-lg hover:cursor-pointer" asChild>
        {!session ? (
          <Link href="/api/auth/signin">
            <UserIcon className="h-4 w-4" />
          </Link>
        ) : (
          <Link href="api/auth/signout">
            <UserIcon className="h-4 w-4" />
          </Link>
        )}
      </AvatarFallback>
    </Avatar>
  );
};

export default SignInHeader;
