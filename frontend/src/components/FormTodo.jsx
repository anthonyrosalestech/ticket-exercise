import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketSlice";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const FormTodo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/tickets/create`, data).then((res) => {
      dispatch(addTicket(res.data));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 mb-5 col-sm-12 col-md-6">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            value={data.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder=""
            value={data.author}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            placeholder=""
            value={data.content}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <button type="submit">Send</button> */}
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default FormTodo;
