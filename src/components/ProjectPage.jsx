/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "../helpers";

const ProjectPage = (props) => {
  const { id } = useParams();

  if (props.projects[id] === undefined) {
    return <NotFound />;
  }

  const project = props.projects[id];

  return (
    //   <h1>My Projects 👨‍💻:</h1>
    //   {/* <Tabs defaultActiveKey="react" id="uncontrolled-tab-example">
    //     <Tab eventKey="react" title="React">
    //       <Container>
    //         <Row>
    //           <Col>
    //           <Project id="1" />
    //           </Col>
    //           <Col>
    //           <Project id="2" />
    //           </Col>
    //           <Col>
    //           <Project id="3" />
    //           </Col>
    //           <Col>
    //           <Project id="4" />
    //           </Col>
    //           <Col>
    //           <Project id="5" /> */}
    // </Row>
    // ## My Favorite Repos 💟:

    //  [![OSBS](https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=online-store-billing-system&show_icons=true&theme=algolia)](https://github.com/BR19-gh/online-store-billing-system)
    //  [![RSD](https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=rsd&show_icons=true&theme=prussian )](https://github.com/BR19-gh/rsd)
    //  [![Runman](https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=Runman&show_icons=true&theme=maroongold)](https://github.com/BR19-gh/Runman)
    //  [![ReviewSystem](https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=reviewSystem&show_icons=true&theme=tokyonight)](https://github.com/BR19-gh/reviewSystem)
    //  [![myPortfolio](https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=myPortfolio&show_icons=true&theme=yeblu)](https://github.com/BR19-gh/myPortfolio)

    <Card className="text-center">
      <Card.Header>
        Poll By {project.author === props.authedUser ? "You" : project.author}
      </Card.Header>
      <div className="text-center">
        <Image
          style={{
            width: "100px",
            height: "100px",
            marginTop: "10px",
          }}
          src={props.users[project.author].avatarURL}
          alt="avatar"
          roundedCircle
        />
      </div>
      <Card.Body>
        <Card.Title>Would You Rather</Card.Title>

        <Container style={{ display: "flex" }} size="lg" className="mb-2">
          <Card style={{ width: "50%" }} className="text-center">
            <Card.Body>
              <Card.Text style={{ height: "40px" }}>
                {project.optionOne.text}
              </Card.Text>
              <Button
                variant={"primary"}
                style={{ width: "100%", height: "40px" }}
              >
                submit
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "50%" }} className="text-center">
            <Card.Body>
              <Card.Text style={{ height: "40px" }}>
                {project.optionTwo.text}
              </Card.Text>
              <Button
                variant={"primary"}
                style={{ width: "100%", height: "40px" }}
              >
                submit{" "}
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted">
        {formatDate(project.timestamp)}
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ projects, users, authedUser }) => {
  return {
    projects,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(ProjectPage);
