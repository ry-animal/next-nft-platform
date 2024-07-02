//@ts-ignore
import edjsHTML from "editorjs-html";
import { create, CID } from "ipfs-http-client";

const projectID = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID;
const secretKey = process.env.NEXT_PUBLIC_INFURA_IPFS_SECRET_KEY;

const auth =
  "Basic " + Buffer.from(projectID + ":" + secretKey).toString("base64");

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export function generateHTML(output: any): string {
  if (output == undefined) return "";
  const edjsParser = edjsHTML();
  const html = edjsParser.parse(output);
  let out = "";
  for (let i = 0; i < html.length; i++) {
    out += html[i] + "</br>";
  }
  return out;
}

export interface IPFSResult {
  cid: CID;
  path: string;
  size: number;
}

export async function uploadToIPFS(data: Uint8Array): Promise<IPFSResult> {
  const imageResult = await ipfs.add(data);
  console.log(
    `File uploaded with CID: ${imageResult.cid} and path: ${imageResult.path} and size: ${imageResult.size} bytes `
  );
  return imageResult;
}

export function b64toBlob(
  b64Data: string,
  contentType = "",
  sliceSize = 512
): Blob {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
