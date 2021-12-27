import "../App.css";
import { Text, Grid, Spacer, Card, Button, Link } from "@nextui-org/react";

export default function works() {
  return (
    <div className="works">
      <h1 className="animate__animated animate__fadeInUp">Works</h1>
      <Grid.Container gap={2}>
        <Grid>
          <Card className="animate__animated animate__fadeInUp" width="330px">
            <Text h4 className="fnt">
              Newsit
            </Text>
            <Text className="fnt">News web app made with Reactjs.</Text>
            <Card.Footer>
              <Link color target="_blank" href="https://newsit.vercel.app/" icon>
                Visit
              </Link>
              <Spacer x={1} />
              <Link
                color
                target="_blank"
                href="https://github.com/codejesse/NewsifyV2"
                icon
              >
                GitHub
              </Link>
            </Card.Footer>
          </Card>
          <Spacer y={1} />
          <Card className="animate__animated animate__fadeInUp" width="330px">
            <Text h4 className="fnt">
              ScreenTime
            </Text>
            <Text className="fnt">
              Movie web application made with Reactjs.
            </Text>
            <Card.Footer>
              <Link color target="_blank" href="https://screentime.vercel.app/" icon>
                Visit
              </Link>
              <Spacer x={1} />
              <Link
                color
                target="_blank"
                href="https://github.com/codejesse/ScreenTime-movie-app"
                icon
              >
                GitHub
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid>
          <Card className="animate__animated animate__fadeInUp" width="330px">
            <Text h4 className="fnt">
              Kso Website
            </Text>
            <Text className="fnt">Landing page made for a client.</Text>
            <Card.Footer>
              <Link target="_blank" href="https://kso.vercel.app/" icon>
                Visit
              </Link>
              <Spacer x={1} />
              <Link
                target="_blank"
                href="https://github.com/codejesse/Kso-website"
                icon
              >
                GitHub
              </Link>
            </Card.Footer>
          </Card>
          <Spacer y={2} />
          <Button className="btn">
            <Link
              className="btn"
              target="_blank"
              href="https://github.com/codejesse/"
              icon
            >
              Github for more
            </Link>
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}
