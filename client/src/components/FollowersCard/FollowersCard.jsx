import { useEffect } from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import { useState } from "react";
import { getAllUser } from "../../api/UserRequest";
import "./FollowersCard.css";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="followersCard">
      <h3>People You may Know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
