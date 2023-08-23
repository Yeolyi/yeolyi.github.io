import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import getSrcPath from "@/lib/getSrcPath";
import iteratePath from "@/lib/iteratePath";
import CustomMDXRemote from "./CustomMDXRemote";
import getFilledPost from "@/lib/getFilledPost";
import TOC from "@/app/docs/[[...path]]/TOC";

interface PostProps {
  params: {
    path?: string[];
  };
}

export const generateMetadata = async ({
  params,
}: PostProps): Promise<Metadata> => {
  const { data, content } = await getFilledPost({
    type: "SEGMENTS",
    segments: params.path,
  });
  return {
    title: data.title,
    description: data.description,
  };
};

const PostPage = async ({ params }: PostProps) => {
  const { data, content, toc } = await getFilledPost({
    type: "SEGMENTS",
    segments: params.path,
  });
  return (
    <>
      <h1>{data?.title}</h1>
      <TOC toc={toc} />
      <CustomMDXRemote segments={params.path ?? []} source={content} />
    </>
  );
};

export const generateStaticParams = async () => {
  const params: { path: string[] }[] = [];
  const srcPath = getSrcPath();
  const skipFolder = (path: string) =>
    path === "node_modules" || path.startsWith(".");
  const f = (filePath: string, segments: string[]) => {
    if (filePath.endsWith("/index.md")) {
      params.push({ path: segments });
    }
  };
  await iteratePath(srcPath, [], f, skipFolder);

  return params;
};

export default PostPage;
