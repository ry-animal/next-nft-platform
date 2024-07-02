import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Collection } from "@prisma/client";
import { NftPage } from "../../components/nfts";
import { LoaderBlack } from "../../components/loaderBlack";
import { Scaffold } from "../../components/Scaffold";
import { StaticBackground } from "../../components/BackgroundStatic";
import { b64toBlob } from "../../core/contentUtils";
import { CollectionStats } from "../../types";
import { CollectionHeader } from "../../components/collections/CollectionHeader";

const CollectionPage: NextPage = () => {
  const router = useRouter();
  const { collectionId } = router.query;

  const [stats, setStats] = useState<CollectionStats | undefined>(undefined);
  const collectionQuery = api.collection.getCollectionByIdentifier.useQuery({
    collectionId: collectionId ? `${collectionId}` : ``,
  });

  const [collectionMetaData, setCollectionMetaData] = useState<any>({
    name: "",
    description: "",
    image: "",
  });

  const [collectionData, setCollectionData] = useState<Collection>({
    id: "",
    identifier: "",
    active: false,
    status: "Predrop",
    contractId: "",
    contractAddress: "",
    saleContract: "",
    whiteListContract: "",
    metaData: { name: "" },
    tokenCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    thumb: "",
    backgroundImage: "",
    producer: "",
    blockchain: "ETH",
    creatorRoyalty: "",
    featured: false,
  } as Collection);
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    if (fetched) return;
    if (collectionQuery.data) {
      setCollectionMetaData(() => {
        return {
          ...collectionMetaData,
          ["name"]: (collectionQuery.data?.metaData as any).name,
          ["description"]: (collectionQuery.data?.metaData as any).description,
          ["image"]: (collectionQuery.data?.metaData as any).image,
        };
      });
      setCollectionData(collectionQuery.data as Collection);
      getCollectionStats(collectionQuery.data.id);
      setFetched(true);
    }
  }, [collectionQuery]);

  const apiContext = api.useContext();
  async function getCollectionStats(id: string) {
    const stats = await apiContext.stats.getCollectionStats.fetch({
      collectionId: id,
    });
    setStats(stats);
  }
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Scaffold
      noise={collectionData && collectionData.id.length > 0 ? 0.05 : 0.8}
    >
      <div className="flex flex-col ">
        {collectionData && (
          <CollectionHeader stats={stats} collection={collectionData} />
        )}
        {collectionData ? (
          <NftPage collection={collectionData} stats={stats} />
        ) : (
          //^
          //TODO get here and then rename to NFTPage
          //<UserNftPage nfts={collectionNfts} type={PageType.COLLECTION}/>
          <LoaderBlack title="Loading Collection" />
        )}
      </div>
    </Scaffold>
  );
};

export default CollectionPage;
