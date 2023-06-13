import { Grid } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import img1 from "../images/vitspot.jpg";
import img2 from "../images/Wizzkids.jpg";

const FooterV2 = () => {
  return (
    <div style={{ backgroundColor: "white", paddingTop: "10px" }}>
      <section className="border-bottom"></section>

      <div className="text-center p-4">
        <Grid container direction="row" spacing={2}>

          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <span className="fw-bold">Meet Our Social Media Partner</span>
            </Grid>
            <Grid item>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <a href="https://www.instagram.com/vitspot/" target="_blank" rel="noreferrer">
                <img src={img1} alt="VITspot" width="60px" height="60px" style={{borderRadius: "50%"}} />
                </a>
              </div>
            </Grid>
          </Grid>

          <Grid container direction="column" spacing={2}>
            <Grid item>
              <span className="fw-bold">Made with ❤ by Kaustubh & Manav</span>
            </Grid>
            <Grid item>
              <span style={{ marginTop: "20px" }}>
                <div>
                  <a
                    href="https://www.linkedin.com/in/kaustubhdwivedi1729"
                    className="me-4 text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manav-goyal"
                    className="me-4 text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={25} />
                  </a>
                  <a
                    href="https://github.com/manavgoyal111/placement-2023"
                    className="me-4 text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={25} />
                  </a>
                  <a
                    href="https://www.instagram.com/manavgoyal111/"
                    className="me-4 text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram size={25} />
                  </a>
                  <a
                    href="https://www.instagram.com/onlykingkd/"
                    className="me-4 text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram size={25} />
                  </a>
                </div>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FooterV2;
