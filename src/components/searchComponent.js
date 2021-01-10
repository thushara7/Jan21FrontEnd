import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  text: {
    width: "100ch",
    backgroundColor: "white"
  }
}));
const SearchComponent = ({ data }) => {
  const classes = useStyles();
  // states
  const [searchText, setSearchText] = useState("");
  const [displaySearchResult, setDisplaySearchResult] = useState("");
  const [searchError, setSearchError] = useState(false);

  //handlers
  const handleSearchChange = e => {
    setSearchText(e.target.value);
  };
  const handleSearchEvent = e => {
    if (e.which === 13) {
      e.preventDefault();
      const searchResult = data.filter(
        el =>
          el.slotId === searchText ||
          el.color === searchText ||
          el.registrationNo === searchText
      );
      const isError = searchResult.length === 0 ? true : false;
      setSearchError(isError);
      setDisplaySearchResult(searchResult);
    }
  };

  return (
    <div>
      <TextField
        required
        id="standard-required"
        label="Seach color(e.g. 'white)/ search registration num (e.g. 'reg2') / search slot number here(e.g. 'slot2')..."
        value={searchText}
        onChange={handleSearchChange}
        onKeyPress={handleSearchEvent}
        className={classes.text}
      />
      <div>
        {displaySearchResult && displaySearchResult.length > 0 && (
          <div>
            {" "}
            <h3> No of Vehicles found : {displaySearchResult.length}</h3>
            <hr></hr>
          </div>
        )}
        {displaySearchResult &&
          displaySearchResult.length > 0 &&
          displaySearchResult.map(result => (
            <div>
              <p>Slot id: {result.slotId} </p>{" "}
              <p>Registration number : {result.registrationNo} </p>{" "}
              <p>Color: {result.color} </p> <hr></hr>
            </div>
          ))}
        {searchError === true &&
          displaySearchResult.length === 0 &&
          searchText.length > 0 && <p>No results found</p>}
      </div>
    </div>
  );
};

export default SearchComponent;
