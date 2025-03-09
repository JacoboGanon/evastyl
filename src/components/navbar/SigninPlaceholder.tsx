import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar } from "~/components/ui/avatar";

const SignInPlaceholder = () => {
  return (
    <Avatar className="size-8">
      <Link href="/api/auth/signin">
        <UserIcon className="h-4 w-4" />
      </Link>
    </Avatar>
  );
};

export default SignInPlaceholder;