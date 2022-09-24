import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from 'next/head'

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Long walks on the beach",
    address: "48 Wolseley Gardens, NE2 1HR",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Jabir%C3%BA_africano_%28Ephippiorhynchus_senegalensis%29%2C_delta_del_Okavango%2C_Botsuana%2C_2018-07-31%2C_DD_11.jpg",
    description: "A Nice Meetup",
  },
  {
    id: "m2",
    title: "Big Bum is the way to go",
    address: "21 Knowle Road, LS6 4HX",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Jabir%C3%BA_africano_%28Ephippiorhynchus_senegalensis%29%2C_delta_del_Okavango%2C_Botsuana%2C_2018-07-31%2C_DD_11.jpg",
    description: "Meet me in an Alley",
  },
  {
    id: "m3",
    title: "Serial Killer looking for next victim",
    address: "60 Wychwood Avenue, LU2 7HU, Luton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Jabir%C3%BA_africano_%28Ephippiorhynchus_senegalensis%29%2C_delta_del_Okavango%2C_Botsuana%2C_2018-07-31%2C_DD_11.jpg",
    description: "Enjoy the day like it's the last one of your life",
  },
];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  // useEffect(() => {
    // Send http request and fetch data
    // Set Loaded Meetups
    // setLoadedMeetups(DUMMY_MEETUPS)
  // }, [])

  return (
    <>
      <Head>
        <title>React Hookups</title>
        <meta name="description" content="Hook up with sexy bois" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// This will never be executed on the client side, so you can write any code in here. 
// This solves the issue of using useEffect or use state when rendering static page content which should be fetched on initial page load. 
// This is why I have commeneted out useState and useEffect above
// When the page renders initially there will be no content as it will fetch it from the DB, this is bad for UX and also SEO as this content does not exist in the page source.
// getStaticProps tells next that there is some data that needs to be gathered before the page loads. The method must be named getStatic props.
// it always returns an object with props, then whatever you want to call your data
// It can also be asyncronus, you must pass these props into your component. 
// LEcture 336 if you are confused

export const getStaticProps = async () => {
  // Fetch Data from API 
  const client = await MongoClient.connect(
    "mongodb+srv://DanielJHeery:uUYjQ6Erygq5qAW@cluster0.bzpam6o.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      }))
    }, 
    revalidate: 10 // This allows us to regenerate the page after a designated number of seconds (as long as there are requests coming to the page) this is useful for pages where there are frequent updates, such as a social media feed. The seconds, note it is seconds not miliseconds, for example the example signals next to check for updates to the db or page every 10 seconds.
  };
}

// If you want to regenerate the page after every incoming request you should use: getServerSideProps
// This will run on the server after deployment
// This should only be used if your data updates every few seconds 
// or if you need to handle something on the serverside


// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res
  
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }


export default HomePage;
