import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Nft, User } from "@prisma/client";
import { NftPage } from "../../components/nfts";
import { Loader } from "../../components/loader";
import { LoaderBlack } from "../../components/loaderBlack";
import { Scaffold } from "../../components/Scaffold";
import { PageType, UserNftPage } from "../../components/nfts/UserNftPage";

const ProfilePage: NextPage = () => {
  const [userAddress, setUserAddress] = useState<string>("");
  const router = useRouter();
  const { address } = router.query;

  useEffect(() => {
    if (address) setUserAddress(`${address}`);
  }, [address]);

  return (
    <Scaffold noise={address && address.length > 0 ? 0.05 : 0.8}>
      <div className="flex flex-col">
        {address ? (
          <UserNftPage address={userAddress} type={PageType.USER} />
        ) : (
          //^
          //TODO get here
          //<NftPage nfts={userNfts} type={PageType.USER} />
          <LoaderBlack title="Loading Collector" />
        )}
      </div>
    </Scaffold>
  );
};

export default ProfilePage;
