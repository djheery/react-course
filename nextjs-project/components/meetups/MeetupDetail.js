import { Fragment } from "react";
import stylse from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={stylse.detail}>
      <img
        src={props.img}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
