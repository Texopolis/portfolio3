import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectCard2(props) {
  const [open, setOpen] = React.useState(false);
  const [displayImage, setDisplayImage] = useState(false);

  const handleDisplayImage = () => {
    setDisplayImage(!displayImage);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        onMouseEnter={handleDisplayImage}
        onMouseLeave={handleDisplayImage}
        sx={{
          maxWidth: 345,
          border: "1px solid ThreeDDarkShadow",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "black",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 0 49px #0ff",
          },
        }}>
        <CardActionArea
          onClick={handleClickOpen}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
          }}>
          {displayImage ? (
            <CardMedia
              component="img"
              height="175px"
              image={props.thumbnail}
              alt="project thumbnail"
            />
          ) : (
            <Box height="175px">
              <Box
                sx={{
                  position: "absolute",
                  //   border: "1px solid red",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  right: 2,
                  top: 2,
                  padding: "5px",
                }}>
                {props.html && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(88, 88, 224)" }}>
                    html
                  </Typography>
                )}
                {props.css && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(226, 26, 226)" }}>
                    css
                  </Typography>
                  )}
                  {props.mui && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(194, 194, 52)" }}>
                    MUI
                  </Typography>
                )}
                {props.tailwind && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "#6366F1" }}>
                    tailwind
                  </Typography>
                )}

                {props.javascript && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(194, 194, 52)" }}>
                    javascript
                  </Typography>
                )}
                {props.typescript && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "orange" }}>
                    typescript
                  </Typography>
                )}
                {props.react && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(33, 170, 33)" }}>
                    react
                  </Typography>
                )}
                {props.solidity && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgb(18, 208, 233)" }}>
                    solidity
                  </Typography>
                )}
                {props.rust && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "rgba(255, 102, 0, 0.822)" }}>
                    rust
                  </Typography>
                )}
                {props.nextjs && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "#D8308F" }}>
                    next.js
                  </Typography>
                )}
                {props.firestore && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "#EFEBAC" }}>
                    firestore
                  </Typography>
                )}

                {props.node && (
                  <Typography
                    variant="body2"
                    fontFamily="Special Elite"
                    sx={{ color: "pink" }}>
                    node.js
                  </Typography>
                )}
              </Box>
            </Box>
          )}
          <CardContent
            sx={{
              backgroundColor: "black",
              color: "#A9ABAE",
              //   border: "2px solid pink",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              flex: 1,
            }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontFamily="Special Elite">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="Project-description"
        sx={{
          // backgroundColor: "#282C3499"
          backgroundImage: `url(${props.thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <DialogTitle
          sx={{
            backgroundColor: "black",
            color: "whitesmoke",
            fontSize: "2.5em",
            textAlign: "center",
          }}>
          {props.title}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "black", color: "whitesmoke" }}>
          <DialogContentText
            id="project-description"
            sx={{ color: "whitesmoke", whiteSpace: "pre-wrap" }}>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "black",
            color: "whitesmoke",
            // border: "2px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {props.code && (
            <Button
              href={props.code}
              target="blank"
              sx={{
                width: "50%",
                // border: "1px solid yellow",
                height: "3.5em",
                fontSize: "2em",
                color: "#A9ABAE",
                fontFamily: "Special Elite",
                borderRadius: "10px",
                "&:hover": {
                  color: "white",
                  textShadow:
                    "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff",
                  transform: "scale(1.05)",
                  boxShadow: "0 0 20px #0ff inset",
                },
                // -webkit-box-shadow: 0 0 20px rgba(24, 240, 12, 0.5) inset;
                // -moz-box-shadow: 0 0 20px rgba(24, 240, 12, 0.5) inset;
              }}>
              Code
            </Button>
          )}
          {props.url && (
            <Button
              href={props.url}
              target="blank"
              sx={{
                width: "50%",
                // border: "1px solid yellow",
                height: "3.5em",
                fontSize: "2em",
                color: "#A9ABAE",
                fontFamily: "Special Elite",
                borderRadius: "10px",
                "&:hover": {
                  color: "white",
                  textShadow:
                    "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff",
                  transform: "scale(1.05)",
                  boxShadow: "0 0 20px #0ff inset",
                },
              }}>
              {`Live Site ${props.metamask ? "*" : ""}`}
            </Button>
          )}
        </DialogActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "black",
            color: "#A9ABAE",
            // border:"1px solid red"
          }}>
          {props.metamask && (
            <Box sx={{ display: "flex", alignItems: "center", marginRight:"8px", marginBottom:"8px"}}>
              <Typography>*Requires Metamask</Typography>
              <a href="https://metamask.io/" target="blank">
                <img
                  width="32px"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                  alt="metamask icon"
                />
              </a>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}

export default ProjectCard2;
