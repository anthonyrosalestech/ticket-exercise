import { db } from "../db/index.js";

const getAllTickets = async () => {
  const query = `select * from tickets`;
  const result = await db.query(query);
  return result.rows;
};

const getTicketBy = async ({ filter, value }) => {
  if (filter && value) {
    const query = `select * from tickets where ${filter} like '%${value}%'`;
    const result = await db.query(query);
    console.log(result.rows[0]);
    return result.rows[0];
  }
  return { error: "campos necesarios" };
};

const createOneTicket = async ({ title, author, content }) => {
  try {
    const query = `INSERT INTO tickets(title, author, content) VALUES ($1, $2, $3) returning *;`;
    const result = await db.query(query, [title, author, content]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default { createOneTicket, getAllTickets, getTicketBy };
