import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const addMeetupHandler = async (meetupData) => {
    console.log(JSON.stringify(meetupData))
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(meetupData)
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetup;