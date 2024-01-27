import { Router } from "express";
import repository from "./repository.js";

const allRouter = Router();

allRouter.get("/tickets", async (request, response) => {
  const result = await repository.getAllTickets();
  response.status(200).json(result);
});

allRouter.get("/tickets/by", async (request, response) => {
  const result = await repository.getTicketBy(request.body);
  response.status(200).json(result);
});

allRouter.post("/tickets/create", async (request, response) => {
  console.log(request.body)
  const result = await repository.createOneTicket(request.body);
  response.status(200).json(result);
});

export default allRouter;
