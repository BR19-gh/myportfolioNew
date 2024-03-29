/* eslint-disable react/prop-types */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../public/icon.png";

const Navigation = ({ expanded, setExpanded, setLang, lang, setLoading }) => {
  const navigate = useNavigate();
  const isActive = (path) => window.location.pathname === path;

  return (
    <Navbar
      className="showPage"
      expanded={expanded}
      fixed="top"
      expand="lg"
      style={{
        backdropFilter: "blur(30px) contrast(100%)",
        WebkitBackdropFilter: "blur(30px) contrast(100%)",
        width: "100%",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <Navbar.Brand
        style={{
          cursor: "pointer",
          marginLeft: lang === "ar" ? "10px" : "0px",
          marginRight: lang === "en" ? "10px" : "0px",
        }}
        onClick={() => {
          if (lang === "ar") navigate("/ar");
          else navigate("/en");
        }}
      >
        <Image src={icon} style={{ height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="navbarScroll"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ textAlign: "end" }}>
          <Nav.Link
            className={isActive("/") || isActive("/ar") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              if (lang === "ar") navigate("/ar");
              else navigate("/");
            }}
          >
            {lang === "en" ? "Home" : "الصفحة الرئيسية"}
          </Nav.Link>
          <Nav.Link
            className={
              isActive("/aboutme") || isActive("/aboutme/ar") ? "active" : ""
            }
            onClick={() => {
              setExpanded(false);
              if (lang === "ar") navigate("/aboutme/ar");
              else navigate("/aboutme");
            }}
          >
            {lang === "en" ? "About Me" : "عني"}
          </Nav.Link>
          <Nav.Link
            className={
              isActive("/projects") || isActive("/projects/ar") ? "active" : ""
            }
            onClick={() => {
              setExpanded(false);
              if (lang === "ar") navigate("/projects/ar");
              else navigate("/projects");
            }}
          >
            {lang === "en" ? "Projects" : "المشاريع"}
          </Nav.Link>
          <Nav.Link
            className={isActive("/stats") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              if (lang === "ar") navigate("/stats/ar");
              else navigate("/stats");
            }}
          >
            {lang === "en" ? "Stats" : "الاحصائيات"}
          </Nav.Link>
          <Nav.Link
            className={
              isActive("/resume") || isActive("/resume/ar") ? "active" : ""
            }
            onClick={() => {
              setExpanded(false);
              if (lang === "ar") navigate("/resume/ar");
              else navigate("/resume");
            }}
          >
            {lang === "en" ? "Resume" : "السيرة الذاتية"}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setExpanded(false);
              setLoading(true);
              if (lang === "en") {
                window.location.href = "/ar";
                setLang("ar");
              } else {
                window.location.href = "/";
                setLang("en");
              }
            }}
          >
            {lang === "en" ? (
              <a>
                Language: <a id="langEN">🇬🇧</a>
              </a>
            ) : (
              <a>
                اللغة: <a id="langAR">🇸🇦</a>
              </a>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Navigation);
