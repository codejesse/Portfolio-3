import "../App.css";
import { useState } from "react";
import { Button, Text, Modal, Grid, Spacer, Link } from "@nextui-org/react";

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button
        className="menu"
        flat
        color="Accents 1"
        auto
        onClick={handler}
      >
        Menu
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body className="animate__animated animate__fadeInUp">
          <Grid>
            <Text className="center" id="modal-title" size={35}>
              <Link href="/">Home</Link>
            </Text>
            <Spacer y={1} />
            <Text className="center" id="modal-title" size={35}>
              <Link href="/about">About</Link>
            </Text>
            <Spacer y={1} />
            <Text className="center" id="modal-title" size={35}>
              <Link href="/works">Works</Link>
            </Text>
            <Spacer y={1} />
            <Text className="center" id="modal-title" size={35}>
              <Link href="/about">Contact</Link>
            </Text>
            {/* <Footer /> */}
          </Grid>
        </Modal.Body>
      </Modal>
    </div>
  );
}
