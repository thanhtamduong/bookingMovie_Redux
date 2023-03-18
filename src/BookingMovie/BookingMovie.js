import React, { Component } from "react";
import "../BookingMovie/BookingMovie.css";
import ThongTinGheDat from "./ThongTinGheDat";
import dataDanhSachGhe from "../Data/danhSachGhe.json";
import GheDat from "./GheDat";

class BookingMovie extends Component {
  renderHangGhe = () => {
    //gheDat: hangGhe
    return dataDanhSachGhe.map((gheDat, index) => {
      return (
        <div key={{ index }}>
          <GheDat gheDat={gheDat} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="container"
            style={{ paddingRight: "0", paddingLeft: "0" }}
          >
            <div className="row">
              <div className="col-8">
                <h1
                  style={{ fontSize: "35px" }}
                  className="mt-2 font-weight-bold text-warning"
                >
                  ĐẶT VÉ XEM PHIM
                </h1>
                <div className="h4 text-white">Màn Hình</div>
                <div className="d-flex flex-row justify-content-center">
                  <div className="screen mt-1"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1
                  style={{ fontSize: "35px" }}
                  className="mt-2 font-weight-bold text-warning"
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </h1>
                <ThongTinGheDat />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookingMovie;
