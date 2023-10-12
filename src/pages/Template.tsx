import Logo from "../assets/logo.png";
import "./Template.css";

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PageTemplate = () => {
  return (
    <>
      <div className="header">
        <div className="d-flex j-between a-center">
          <div className="p-0">
            <div className="d-flex a-center img">
              <img alt="logo" src={Logo} />
            </div>
          </div>
          <div className="p-0">
            <p className="header-title">
              123 Main Street, Dover, NH 03820-4667
            </p>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
      <div className="footer-wrapper">
        <hr className="divider"></hr>
        <div className="d-flex j-between">
          <div className="p-0">
            <p className="footer txt-left">
              Report Genereted on {formattedDate}
            </p>
          </div>
          <div className="p-0">
            <p className="footer txt-right">
              RealAssist Property Report | Page 1<span>of 25</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
