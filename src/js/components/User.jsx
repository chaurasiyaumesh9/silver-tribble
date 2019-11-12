import React from "react";

function User(props) {
  return (
    <div className="container mt-5">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="txt-name">Name</label>
              <input
                className="form-control"
                type="text"
                name="txt-name"
                id="txt-name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="txt-contact">Contact</label>
              <input
                className="form-control"
                type="text"
                name="txt-contact"
                id="txt-contact"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="txt-email">Email</label>
              <input
                className="form-control"
                type="text"
                name="txt-email"
                id="txt-email"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default User;
