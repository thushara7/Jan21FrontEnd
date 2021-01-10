import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SearchComponent from "./components/searchComponent";
import ViewLogComponet from "./components/viewLogComponet";
import AddRecordsComponents from "./components/addRecordsComponents";
import { template } from "@babel/core";
import { file } from "@babel/types";
function App() {
  //the mock data
  const [data, setData] = useState([
    {
      registrationNo: "reg1",
      color: "white",
      slotId: "slot1"
    },
    {
      registrationNo: "reg2",
      color: "white",
      slotId: "slot2"
    },
    {
      registrationNo: "reg3",
      color: "white",
      slotId: "slot3"
    },
    {
      registrationNo: "reg4",
      color: "white",
      slotId: "slot4"
    },
    {
      registrationNo: "reg5",
      color: "blue",
      slotId: "slot5"
    },
    {
      registrationNo: "reg6",
      color: "red",
      slotId: "slot6"
    },
    {
      registrationNo: "reg7",
      color: "white",
      slotId: "slot7"
    },
    {
      registrationNo: "reg8",
      color: "black",
      slotId: "slot8"
    },
    {
      registrationNo: "reg9",
      color: "white",
      slotId: "slot9"
    },
    {
      registrationNo: "reg10",
      color: "black",
      slotId: "slot10"
    }
  ]);
  const [error, setError] = useState("");
  const [isSerach, setIsearch] = useState(false);
  const handleViewSearch = e => {
    setIsearch(true);
    setIsView(false);
    setIsAdd(false);
    setError("");
  };
  const [isView, setIsView] = useState(false);
  const handleView = e => {
    setIsView(true);
    setIsearch(false);
    setIsAdd(false);
    setError("");
  };
  const [isAdd, setIsAdd] = useState(false);
  const handleAdd = e => {
    setIsAdd(true);
    setIsearch(false);
    setIsView(false);
    setError("");
  };

  const AddRecord = (record, type) => {
    let temp = [...data];
    if (type === "entry") {
      if (data.length < 20) {
        temp.push(record);
      }
      const error =
        data.length < 20
          ? "Record added successfully!"
          : "Something went wrong";
      setError(error);
    } else if (type === "exit") {
      temp = temp.filter(el => el.slotId !== record.slotId);
      const error =
        temp.length === 0
          ? "Something went wrong"
          : "Record removed successfully!";
      setError(error);
    }
    setData(temp);
  };
  return (
    <div className="App">
      <div style={{ margin: "2rem" }}>
        <h3> Click on the tabs to begin</h3>
      </div>
      <Button
        style={{ margin: "2rem" }}
        onClick={handleViewSearch}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      <Button
        style={{ margin: "2rem" }}
        onClick={handleView}
        variant="contained"
        color="primary"
      >
        View Logs
      </Button>
      <Button
        style={{ margin: "2rem" }}
        onClick={handleAdd}
        variant="contained"
        color="primary"
      >
        Entry / Exit
      </Button>
      {isSerach && <SearchComponent data={data}></SearchComponent>}
      {isView && <ViewLogComponet data={data}></ViewLogComponet>}
      {isAdd && (
        <AddRecordsComponents
          data={data}
          handleChangeRecords={AddRecord}
          error={error}
        ></AddRecordsComponents>
      )}
    </div>
  );
}

export default App;
