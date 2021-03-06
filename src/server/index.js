import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import Todo from "../shared/todo/Todo"
import "isomorphic-fetch";
import bodyParser from "body-parser"

let initData = [
  {
    "_id" : "5dcb8251cf530d4db579cec1",
    "isDeleted" : true,
    "title" : "Hello",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:10:57.009Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb8256cf530d4db579cec2",
    "isDeleted" : true,
    "title" : "Hello",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:11:02.077Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb8742cf530d4db579cec3",
    "isDeleted" : false,
    "title" : "Poc on isomorphic apps",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:32:02.157Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb874acf530d4db579cec4",
    "isDeleted" : false,
    "title" : "Buy some milk",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:32:10.162Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb8756cf530d4db579cec5",
    "isDeleted" : false,
    "title" : "Visit your aunt",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:32:22.486Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb8761cf530d4db579cec6",
    "isDeleted" : false,
    "title" : "Pay the bills",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:32:33.698Z"),
    "__v" : 0
  },
  {
    "_id" : "5dcb8769cf530d4db579cec7",
    "isDeleted" : false,
    "title" : "Follow on Eth v2",
    "userid" : "5dcb7f5c67bf274773b08e99",
    "priority" : "Medium",
    "status" : "Pending",
    "crtd" : new Date("2019-11-13T04:32:41.796Z"),
    "__v" : 0
  },
  
]


const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.static("public"));

app.get("/api/todos", (req, res) => {
  res.json(initData);
});

app.post("/api/del-todo", (req, res) => {
  let {_id} = req.body
  let filteredData = initData.filter(todo => todo._id !== _id)
  initData = filteredData
  return res.json({updatedTodo: filteredData})
})

app.get("*", async(req, res) => {
  let resp = await fetch("http://localhost:3000/api/todos")
  let initialData = await resp.json()
  console.log("rendered from server")
  const markup = renderToString(<Todo initialData={initialData} />)

  return res.send(`
    <html>
      <head>
        <title> Tes </title>
        <script src="bundle.js" defer></script>
        <script>window.__initialData__=${JSON.stringify(initialData)}</script>
      </head>
      <body>
        <div id="root"> ${markup}</div>
      </body>
    </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
