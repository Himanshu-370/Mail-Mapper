import React, { useState } from "react";
import Home from "./Home";

function Modal() {
  const [textInput, setTextInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [data, setData] = useState(null);

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  function handleSelectInputChange(event) {
    setSelectInput(event.target.value);
  }

  const URL = `https://api.hunter.io/v2/domain-search?domain=${textInput}&api_key=20651b8fb05a86abb9a0490bce5cfe87a2476b40&department=${selectInput}`;

  function handleSubmit(event) {
    event.preventDefault();
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }

  let counter = 1;

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Input
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
              <label for="text-input">Name of the Company</label>
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
                <option value="option2">HR</option>
                <option value="option3">Security</option>
              </select>
              <br />
              <br />

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            <br /> <br />
            {data && (
              <div className="api-data">
                <table className="table">
                  <thead>
                    <thead>
                      <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Name of the Employee</th>
                        <th scope="col">Position</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Linkedin Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.data.emails.map((item) => (
                        <tr key={item.id}>
                          <td>{counter}</td>
                          <td>
                            {item.first_name} {item.last_name}
                          </td>
                          <td>{item.position}</td>
                          <td>{item.value}</td>
                          <td>
                            <a href={item.linkedin}>{item.linkedin}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </thead>
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
