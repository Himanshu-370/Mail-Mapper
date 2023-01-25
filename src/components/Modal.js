import React, { useState } from "react";
import Home from "./Home";
import Papa from "papaparse";

function Modal() {
  //State variables
  const [textInput, setTextInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  //function to handle text input change
  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  //function to handle dropdown menu change
  function handleSelectInputChange(event) {
    setSelectInput(event.target.value);
  }

  //API endpoint URL
  const URL = `https://api.hunter.io/v2/domain-search?domain=${textInput}&api_key=20651b8fb05a86abb9a0490bce5cfe87a2476b40&department=${selectInput}`;

  //function to handle submit button
  function handleSubmit(event) {
    event.preventDefault(); //prevents the page from refreshing
    setLoading(true);
    //making fetch request to the API endpoint
    fetch(URL)
      .then((response) => response.json()) //converts the response to JSON
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  //function to handle download as csv button
  function handleDownload() {
    if (!data || !data.data.emails || data.data.emails.length === 0) {
      alert("No data found");
      return;
    }
    const csv = Papa.unparse(data.data.emails);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" }); //creates a Blob object containing the csv data with specified type
    const csvURL = window.URL.createObjectURL(csvData); //creates url object that can be used to download the data
    const tempLink = document.createElement("a"); //creates a a tag element that is used to create a temp link for downloading data
    tempLink.href = csvURL; //assigning href property
    tempLink.setAttribute("download", "data.csv"); //used to show a prompt to the user to download data
    tempLink.click(); //triggers click event
  }

  return (
    <>
      {/* toggles modal button */}
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Search Here...
      </button>
      <Home />
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            {/* form starts here */}
            <form onSubmit={handleSubmit}>
              <label for="text-input">Write the domain of the company</label>
              <br />
              <input
                type="text"
                id="text-input"
                name="text-input"
                value={textInput}
                onChange={handleTextInputChange}
              />
              <br />
              <br />

              <label for="select-input">Select Department</label>
              <br />
              <select
                id="select-input"
                name="select-input"
                value={selectInput}
                onChange={handleSelectInputChange}
              >
                <option value="option1">IT</option>
                <option value="option2">Finance</option>
                <option value="option3">Management</option>
                <option value="option4">Sales</option>
                <option value="option5">Legal</option>
                <option value="option6">Support</option>
                <option value="option7">HR</option>
                <option value="option8">Marketing</option>
                <option value="option9">Communication</option>
              </select>
              <br />
              <br />

              <div className="btns">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>

                {/* Condiitonal statement that checks if the loading state is true, render loading... and else if there is data it renders a download as csv button */}
                {loading ? (
                  <div>Loading...</div>
                ) : data ? (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleDownload}
                  >
                    Download as CSV
                  </button>
                ) : null}
              </div>
            </form>
            <br /> <br />
            {/* Checks if there is any data in the state */}
            {data && (
              <div className="api-data">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Position</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Linkedin Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* checks if there is no data in the respionse or the email array is empty, in that case render nothing found */}
                    {(!data.data ||
                      !data.data.emails ||
                      data.data.emails.length === 0) && (
                      <div>Nothing Found</div>
                    )}
                    {/* maps through the data and renders a row for each data item */}
                    {data.data &&
                      data.data.emails &&
                      data.data.emails.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {item.first_name} {item.last_name}
                          </td>
                          <td>{item.position}</td>
                          <td>
                            <a href={`mailto:${item.value}`} target="_blank">
                              {item.value}
                            </a>
                          </td>
                          <td>
                            <a href={item.linkedin} target="_blank">
                              {item.linkedin}
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
