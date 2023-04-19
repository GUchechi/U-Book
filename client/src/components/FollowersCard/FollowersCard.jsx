import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Followers } from "../../Data/FollowersData";
import User from "../User/User";
import "./FollowersCard.css";
import { useState } from "react";
import { getAllUser } from "../../api/UserRequest";


const FollowersCard = () => {
  const [persons, setPersons] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const {data} = await getAllUser()
      setPersons(data)
    }
    fetchPersons()
  },[])

  return (
    <div className="followersCard">
      <h3>People You may Know</h3>

      {Followers.map((person, id) => (
       <User person={person} key={id}/>
      ))}
    </div>
  );
};

export default FollowersCard;
