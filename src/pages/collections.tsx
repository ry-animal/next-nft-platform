import { type NextPage } from "next";
import { api } from "../utils/api";
import { Scaffold } from "../components/Scaffold";
import { CollectionCard } from "../components/collections/CollectionCard";
import CollectionSection from "../components/home/CollectionSection";
import CollectionsHeroSection from "../components/collections/CollectionsHeroSection";
import React, { useEffect } from "react";
import { Collection } from "@prisma/client";

const Home: NextPage = () => {
  const collections = api.collection.getAll.useQuery();
  const [featuredCollection, setFeaturedCollection] = React.useState<
    Collection | undefined
  >();

  useEffect(() => {
    if (collections.data) {
      for (const collection of collections.data) {
        if (collection.featured) {
          setFeaturedCollection(collection);
          return;
        }
      }
    }
  }, [collections.data]);
  return (
    <Scaffold>
      <CollectionsHeroSection collection={featuredCollection} />
      <CollectionSection />
    </Scaffold>
  );
};

export default Home;
