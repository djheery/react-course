import { useRouter } from 'next/router'

const NewsItem = () => {
  const router = useRouter();
  const id = router.query.newsId // The dynamic name of this file

  // Send a request to the backend API with id 
  // To fetch the news item from storage.
  
  return (
    <div>
      <h1>Dyanmic News Item using Custom Id</h1>
      <p>{id}</p>
    </div>
  );
}

export default NewsItem;