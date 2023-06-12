import { Grid } from "@mui/material";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from "react-icons/ai";

const FooterV2 = () => {
    return (
        <div style={{ backgroundColor: "white", paddingTop: "10px" }}>
            <section className="border-bottom">
            </section>

            <div className="text-center p-4">
                <Grid container direction="column" spacing={2}>
                    <Grid item ><span className="fw-bold">Made with ❤ by Kaustubh & Manav</span></Grid>
                    <Grid item >
                        <span style={{ marginTop: "20px" }}>
                            <div>
                                <a
                                    href="https://twitter.com/ManavGo53314321"
                                    className="me-4 text-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillTwitterCircle size={25} />
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
                            </div>
                        </span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FooterV2;