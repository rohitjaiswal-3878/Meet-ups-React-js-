import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
function NewMeetupForm(props) {
  const titleinputRef = useRef();
  const imageinputRef = useRef();
  const addressinputRef = useRef();
  const descriptioninputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleinputRef.current.value;
    const enteredImage = imageinputRef.current.value;
    const enteredAddress = addressinputRef.current.value;
    const enteredDescription = descriptioninputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptioninputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
