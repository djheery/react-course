import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/id1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/id2">News Item 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
