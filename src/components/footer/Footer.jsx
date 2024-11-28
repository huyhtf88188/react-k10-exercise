import "../../index.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3" id="footer">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="logo">
              <a href="./index.html" className="logo-link">
                <h4>
                  <span className="logo-h">H</span>
                  <span className="logo-h">H</span>
                </h4>
              </a>
            </div>
            <p>
              Chúng tôi cung cấp các sản phẩm chất lượng với dịch vụ tốt nhất.
              Hãy liên hệ để biết thêm chi tiết!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="./index.html"
                  className="text-light text-decoration-none"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="./category.html"
                  className="text-light text-decoration-none"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#footer" className="text-light text-decoration-none">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold">Theo dõi chúng tôi</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <i className="fab fa-facebook-f me-2"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <i className="fab fa-twitter me-2"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <i className="fab fa-instagram me-2"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  <i className="fab fa-linkedin-in me-2"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold">Thông tin liên hệ</h5>
            <ul className="list-unstyled">
              <li className="text-light">
                Email: hhhoangthanhhuy1992@gmail.com
              </li>
              <li className="text-light">SĐT: 0337852638</li>
              <li className="text-light">
                Địa chỉ: Đồng Mỏ - Chi Lăng - Lạng Sơn
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; 1992 Công ty TNHH 1 Thành Viên HH</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
