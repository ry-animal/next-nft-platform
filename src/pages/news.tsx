import { type NextPage } from "next";
import { api } from "../utils/api";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StaticBackground } from "../components/BackgroundStatic";
import { generateHTML } from "../core/contentUtils";
import { Scaffold } from "../components/Scaffold";

const News: NextPage = () => {
  const content = api.content.getPage.useQuery({
    id: "63ff71dacfd8d44474bc84de",
  });

  const html = content.data
    ? generateHTML(JSON.parse(content.data?.content))
    : "";

  return (
    <Scaffold>
      <div className="p-20">
        <div>{">"} News</div>
      </div>

      <div
        id="previewPage"
        className="px-10 pt-0 sm:px-40"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Scaffold>
  );
};

export default News;
