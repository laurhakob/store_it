//  21 toxum chat gptn a avelacrel esi `  className="uploader-custom-class"

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Search from "./Search";
import { signOutUser } from "@/lib/actions/user.actions";
import FileUploader from "./FileUploader";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} className="uploader-custom-class" />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
