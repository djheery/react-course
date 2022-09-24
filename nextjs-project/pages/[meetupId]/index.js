import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://DanielJHeery:@cluster0.bzpam6o.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const col = db.collection('meetups');
  const meet = await col.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: false,
    paths: meet.map(m => ({
      params: {meetupId: m._id.toString()}
    }))
  }
}

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://DanielJHeery:@cluster0.bzpam6o.mongodb.net/?retryWrites=true&w=majority"
  );
    
  const db = client.db();
  const col = db.collection('meetups');
  const meetupId = context.params.meetupId;
  const meet = await col.findOne({_id: ObjectId(meetupId)})
  client.close();
  return {
    props: {
      meetupData: {
        id: meet._id.toString(),
        title: meet.title,
        address: meet.address,
        image: meet.image,
        description: meet.description
      }
    },
  };
};

export default MeetupDetails;
