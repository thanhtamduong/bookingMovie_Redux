import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/reducer/actions/DatVeActions";

class ThongTinGheDat extends Component {
  render() {
    return (
      <div>
        <div className="d-flex mt-4">
          <button className="gheDuocChon mf-0"></button>{" "}
          <span className="text-white font-weight-bold">Ghế đã chọn</span>
          <button className="gheDangChon mf-0"></button>{" "}
          <span className="text-white font-weight-bold">Ghế đang chọn</span>
          <button className="ghe mf-0"></button>{" "}
          <span className="text-white font-weight-bold">Ghế trống</span>
        </div>
        <div className="mt-3 ">
          <table className="table text-white" border="2">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td className="text-warning font-weight-bold">
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td className="text-warning font-weight-bold ">
                      {gheDangDat.gia}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinGheDat);
