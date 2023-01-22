import React, { useState } from "react";
import Home from "./Home";
import Papa from "papaparse";

function Modal() {
  const [textInput, setTextInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  function handleSelectInputChange(event) {
    setSelectInput(event.target.value);
  }

  const URL = `https://api.hunter.io/v2/domain-search?domain=${textInput}&api_key=20651b8fb05a86abb9a0490bce5cfe87a2476b40&department=${selectInput}`;

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  function handleDownload() {
    if (!data || !data.data.emails || data.data.emails.length === 0) {
      alert("No data found");
      return;
    }
    const csv = Papa.unparse(data.data.emails);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const csvURL = window.URL.createObjectURL(csvData);
    const tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", "data.csv");
    tempLink.click();
  }

  return (
    <>
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
                    {(!data.data ||
                      !data.data.emails ||
                      data.data.emails.length === 0) && (
                      <div>Nothing Found</div>
                    )}
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
