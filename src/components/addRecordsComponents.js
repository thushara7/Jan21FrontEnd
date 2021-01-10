import React, { useState } from "react";
import { Select, Button, MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  type: {
    margin: theme.spacing(1),
    minWidth: "500px"
  },
  label: { minWidth: "500px" }
}));
const AddRecordsComponents = ({ data, handleChangeRecords, error }) => {
  const classes = useStyles();
  // state and handler for type dropdwon
  const [type, setType] = useState("");
  const handleChange = event => {
    setType(event.target.value);
  };
  // state and handler for registration field
  const [registrationNo, setRegistrationNo] = useState("");
  const handleAddRegistration = e => {
    setRegistrationNo(e.target.value);
  };
  // state and handler for color field
  const [color, setColor] = useState("");
  const handleColor = e => {
    setColor(e.target.value);
  };
  // state and handler for slot field
  const [slot, setSlot] = useState("");
  const handleSlot = e => {
    setSlot(e.target.value);
  };

  //handler for submit record
  const handleSubmit = e => {
    // logic to handle submit.
    const record = {
      registrationNo: registrationNo,
      color: color,
      slotId: slot
    };
    handleChangeRecords(record, type);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr  1fr",
        width: "700px",
        justifyContent: "center",
        margin: "2rem auto"
      }}
    >
      <p>Select Mode:</p>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        onChange={handleChange}
        className={classes.type}
        placeholder="lol"
      >
        <MenuItem value={"entry"}>Entry</MenuItem>
        <MenuItem value={"exit"}>Exit</MenuItem>
      </Select>
      <p> Registration Number:</p>
      <TextField
        required
        id="standard-required"
        value={registrationNo}
        onChange={handleAddRegistration}
        className={classes.text}
      />
      <p> Vehicle Color:</p>
      <TextField
        required
        id="standard-required"
        value={color}
        onChange={handleColor}
        className={classes.text}
      />
      <p> Parking SLot Number:</p>
      <TextField
        required
        id="standard-required"
        value={slot}
        onChange={handleSlot}
        className={classes.text}
      />
      <Button
        style={{ margin: "2rem" }}
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Modify Records
      </Button>
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};

export default AddRecordsComponents;
