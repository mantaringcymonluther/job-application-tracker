"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const result = await signOut();

    if (result.data) {
      router.push("/sign-in");
    } else {
      alert("Error signing out");
    }
  };

  return <DropdownMenuItem onClick={handleSignOut}>Log Out</DropdownMenuItem>;
};

export default SignOutButton;
