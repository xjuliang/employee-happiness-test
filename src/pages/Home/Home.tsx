import { People } from "@/data";
import { peopleActions } from "@/redux/states";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PeopleTable } from "./components";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
