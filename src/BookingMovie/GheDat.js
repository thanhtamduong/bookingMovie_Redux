import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/reducer/actions/DatVeActions";

class GheDat extends Component {
  renderGhe = () => {
    return this.props.gheDat.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          key={{ index }}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
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

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GheDat);
