import React, { Component } from "react";

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
            <tbody>
              <tr>
                <th>Tổng tiền</th>
                <th className="text-warning">1000000000</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ThongTinGheDat;
