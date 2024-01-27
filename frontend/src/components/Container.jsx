import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import { loadTickets } from "../redux/ticketSlice";
import DrawerAppBar from "./Bar";

const ContainerApp = () => {
  const dispatch = useDispatch();
  // const [list, setList] = useState([]);
  // const handleAddItem = addItem => {
  //   setList([...list, addItem]);
  // };
  const tickets = useSelector((state) => state.ticket);

  useEffect(() => {
    axios.get(`http://localhost:4000/tickets`).then((res) => {
      // setList(res.data);
      dispatch(loadTickets(res.data));
    });
  }, []);

  return (
    <>
      <DrawerAppBar></DrawerAppBar>
      <Container fixed>
        {/* <FormTodo handleAddItem={handleAddItem} /> */}
        {/* <TaskList list={tickets} setList={setList} /> */}
        <FormTodo />
        <TaskList list={tickets} />
      </Container>
    </>
  );
};

export default ContainerApp;
