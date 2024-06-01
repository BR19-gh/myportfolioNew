/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
import { useEffect } from "react";
// import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AboutMe = ({
  myPrimaryColor,
  fontSize,
  setFlexDir,
  setFontSize,
  flexDir,
  setExpanded,
  lang,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setFlexDir("column");
      } else {
        setFlexDir("row");
      }
      if (window.innerWidth < 768) {
        setFontSize("sm");
      } else {
        setFontSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      onClick={() => {
        setExpanded(false);
      }}
      id="aboutme-component"
      className="d-flex flex-wrap justify-content-center showPage"
    >
      <Header
        icon={<i className="fas fa-user"></i>}
        text={{
          en: ["About", "Me"],
          ar: ["عنــ", "ـــــي"],
          space: false,
        }}
        flexDir={flexDir}
        fontSize={fontSize}
        lang={lang}
        myPrimaryColor={myPrimaryColor}
      />

      <Container
        className={
          (flexDir === "row" ? "d-flex " : "") + "justify-content-center"
        }
      >
        <div
          style={{
            textAlign: lang === "en" ? "left" : "right",
            paddingLeft:
              lang === "en" ? (flexDir === "column" ? "0px" : "50px") : "",
            paddingRight:
              lang === "ar" ? (flexDir === "column" ? "0px" : "50px") : "",

            lineHeight: "1.5",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            {lang === "en" ? "I'm Ibrahim" : "أنا ابراهيم"}
          </h3>
          <div
            id="typewriter"
            style={{
              fontWeight: "bold",
              letterSpacing: lang === "ar" ? "0px" : "4px",
            }}
          >
            <Typewriter
              words={[
                    lang === "en" ? "Fullstack Developer" : "مـطــور ويــب مـتـكــامـل",

            lang === "en" ? "Mobile Developer" : "مـطــور تطــبــيــقات",      ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </div>
          <br />
          <p
            style={{
              fontSize: fontSize === "lg" ? "16px" : "14px",
              textAlign: "justify",
            }}
          >
            {lang === "en"
              ? `I have a Bachelor's degree in Computer Science from QU, and I have a
            strong background in Fullstack Web Development. Throughout my
            academic journey, I have obtained various certificates and completed
            relevant courses to enhance my skills and stay up to date with the
            latest industry trends. I am eager to learn new technologies, to
            contribute my expertise to innovative projects and to make a
            meaningful impact in the world of software development.`
              : ` 
            حاصل على درجة البكالوريوس في علوم
             الحاسب من جامعة القصيم، لدي خلفية قوية في تطوير الويب. حصلت على عدة شهادات متنوعة
              وأكملت دورات ذات صلة لتعزيز مهاراتي. احرص
              على الاطلاع الدائم في مستجدات مجالي، واحرص على تعلم
              التقنيات الجديد، اطمح للمساهمة بخبرتي في مشاريع مبتكرة،
              واحقق بها تأثير ذو معنى في مجال تطوير البرمجيات.            `}
            <br />
            <br />
            <a
              style={{
                color: myPrimaryColor,
                fontWeight: "bold",
              }}
            >
              {lang === "en" ? "Email" : "البريد"}:&nbsp;&nbsp;
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="mailto: ibrahim-abdalaziz@hotmail.com"
            >
              ibrahim-abdalaziz@hotmail.com
            </a>
            <br />
            <a
              style={{
                color: myPrimaryColor,
                fontWeight: "bold",
              }}
            >
              {lang === "en" ? "Location" : "الموقع"}:&nbsp;&nbsp;
            </a>
            {lang === "en"
              ? "Qassim - Riyadh, Saudi Arabia"
              : "القصيم - الرياض، السعودية"}
          </p>
          <Button
            id="resume-btn"
            variant="dark"
            className="mb-4"
            style={{
              width: "140px",
            }}
            size="lg"
            onClick={() => {
              if (lang === "en") {
                navigate("/resume");
              } else {
                navigate("/resume/ar");
              }
            }}
          >
            {lang === "en" ? "Resume" : "السيرة"}
            &nbsp;
            <i className="far fa-file"></i>
          </Button>
          <a style={{ margin: "5px" }}></a>
          <Button
            id="resume-btn"
            variant="dark"
            className="mb-4"
            style={{
              width: "140px",
            }}
            size="lg"
            onClick={() => {
              if (lang === "en") {
                navigate("/projects");
              } else {
                navigate("/projects/ar");
              }
            }}
          >
            {lang === "en" ? "Projects" : "المشاريع"}
            &nbsp;
            <i className="fas fa-laptop-code"></i>
          </Button>
        </div>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    myPrimaryColor: state.myPrimaryColor.color,
  };
};

export default connect(mapStateToProps)(AboutMe);
