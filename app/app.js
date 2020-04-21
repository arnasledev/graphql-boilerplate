import "@babel/polyfill";

import dotEnv from "dotenv";
import http from "http";
import express from "express";
import path from "path";
import { graphQLServer } from "./GraphQL";

if (process.env.NODE_ENV && process.env.NODE_ENV !== "production") {
  dotEnv.config();
}

const app = express();
const server = http.createServer(app);
const API_PORT = process.env.API_PORT || 3000;

app.enable("trust proxy");
app.set("trust proxy", "loopback");
app.disable("x-powered-by");

graphQLServer.applyMiddleware({ app });
app.listen(API_PORT);
