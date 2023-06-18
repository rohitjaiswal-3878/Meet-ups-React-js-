import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupPage() {
  const Navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch("https://meetups-9dfdf-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      Navigate("/");
    });
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
