import { Request, Response } from "express";
import { SUCCESS } from "./status-code";
import CircuitBreaker from "./circuit-breaker";

const HOST_SERVICE_EXTERNAL = 'http://localhost:9000'

async function send(req: Request, res: Response) {
  const circuitBreaker = new CircuitBreaker(
    {
      method: "POST",
      url: HOST_SERVICE_EXTERNAL,
    },
    {
      failureThreshold: 3,
      successThreshold: 5,
      timeout: 20000,
    }
  );

  setInterval(() => {
    circuitBreaker.exec()
      .then(response => console.log(response))
      .catch(error => console.log(error.message));
  }, 1000)
   
  res.status(SUCCESS).send();
}

export default {
  send,
};
