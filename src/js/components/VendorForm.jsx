import React, { Component } from "react";
class VendorForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1> Local Mart Merchant form</h1>
        </div>
        <form
          onSubmit={() => {
            console.log("clicked");
            return false;
          }}
        >
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-shopName">
                  {" "}
                  *Name of Property/Shop Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txt-shopName"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-propritor1"> *Name of Propritor 1 </label>
                <input
                  type="text"
                  className="form-control"
                  id="txt-propritor1"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-propritor2"> *Name of Propritor 2 </label>
                <input
                  type="text"
                  className="form-control"
                  id="txt-propritor2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-address"> *Address of Property/Shop </label>
                <input
                  type="text"
                  className="form-control"
                  id="txt-address"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-street"> *Street </label>
                <input
                  type="text"
                  className="form-control"
                  id="txt-street"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-city"> *City </label>
                <select className="form-control" name="txt-city" id="text-city">
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="chennai">Chennai</option>
                  <option value="bengluru">Bangluru</option>
                  <option value="kolkata">Kolkata</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-state"> *State </label>
                <select
                  className="form-control"
                  name="txt-state"
                  id="text-state"
                >
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="andhrapradesh">Andhra Pradesh</option>
                  <option value="tamilnadu">Tamilnadu</option>
                  <option value="kerala">Kerala</option>
                  <option value="bihar">Bihar</option>
                  <option value="meghalaya">Meghalaya</option>
                  <option value="nagaland">Nagaland</option>
                  <option value="arunachalpradesh">Arunachal Pradesh</option>
                  <option value="sikkim">Sikkim</option>
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="txt-district"> *District </label>
                <select
                  className="form-control"
                  name="txt-district"
                  id="text-district"
                >
                  <option value="palghar">Palghar</option>
                  <option value="thane">Thane</option>
                  <option value="raigadh">Raigadh</option>
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="pincode"> *Pin </label>
                <input type="text" className="form-control" id="pincode" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="ownerpic"> Upload Photo </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="ownerpic"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="contact1"> *Contact#1 </label>
                <input type="text" className="form-control" id="contact1" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="contact2"> Contact#2 </label>
                <input type="text" className="form-control" id="contact2" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="contact3"> Contact#3 </label>
                <input type="text" className="form-control" id="contact3" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default VendorForm;
