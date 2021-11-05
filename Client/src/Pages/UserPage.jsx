import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";
import { Theme } from "../Styles/Theme";

export const UserPage = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();
  const fetchUserDetails = async () => {
    await axios
      .get(`https://secure-ravine-45527.herokuapp.com/users/${userid}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <Theme>
      <Navbar />
      <img style={{ width: "100%" }} alt="cover" src={user?.cover_pic} />
    </Theme>
  );
};
