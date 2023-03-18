import React, { Component } from "react";

class GheDat extends Component {
  renderGhe = () => {
    return this.props.gheDat.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      return (
        <button
          onClick={() => {}}
          disabled={disabled}
          key={{ index }}
          className={`ghe ${cssGheDaDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.gheDat.danhSachGhe.map((hang, index) => {
      return (
        <button
          className=" font-weight-bold rowNumber"
          style={{ marginLeft: "37px", textAlign: "center" }}
        >
          {hang.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.gheDat.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.gheDat.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-white text-left mt-2 font-weight-bold">
        {this.renderHangGhe()}
      </div>
    );
  }
}
export default GheDat;
