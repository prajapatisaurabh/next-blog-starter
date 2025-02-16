/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from "next/navigation";
import { existsSync } from "fs";
import { join } from "path";

export default async function Page({ params }: any) {
  const { slug } = await params;
  const path = slug.join("/");
  const filePath = join(process.cwd(), "app/content", `${path}.mdx`);

  if (!existsSync(filePath)) {
    notFound();
  }

  try {
    const Content = (await import(`@/app/content/${path}.mdx`)).default;
    return <Content />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
