import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Tooltip,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FaceIcon from "@mui/icons-material/Face";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import hamburgerIcon from "../images/icons8-menu-512.png";
import hamburgerIcon90 from "../images/icons8-menu-512-90.png";
import "../App.css";
import portrait from "../images/portrait7.png";
import clouds from "../images/cloudsBackground.png";
import { Box } from "@mui/system";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Nav = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenDialog(false);
    setOpenDialog(false);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  return (
    <div
      style={{
        display: "inline",
        position: "fixed",
        top: "2%",
        left: "2%",
      }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <img
          src={open ? hamburgerIcon90 : hamburgerIcon}
          width="100px"
          alt="hamburger icon menu"
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            position: "relative",
            backgroundColor: "black",
            color: "white",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          },
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <MenuItem>
          <Tooltip title="Profile" placement="right" arrow>
            <IconButton
              onClick={() => {
                handleClickOpen();
                setAnchorEl(null);
              }}
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}>
              <FaceIcon color="success" fontSize="large" />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Email" placement="right" arrow>
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
              href="mailto:0douglasbernstein@gmail.com"
              target="blank">
              <EmailIcon color="success" fontSize="large" />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="Github" placement="right" arrow>
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
              href="https://github.com/Texopolis"
              target="blank">
              <GitHubIcon color="success" fontSize="large" />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem>
          <Tooltip title="LinkedIn" placement="right" arrow>
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                },
              }}
              href="https://www.linkedin.com/in/texopolis/"
              target="blank">
              <LinkedInIcon color="success" fontSize="large" />
            </IconButton>
          </Tooltip>
        </MenuItem>
      </Menu>

      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="profile dialog">
        <Box
          sx={{
            backgroundImage: `url(${clouds})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "auto",
            zIndex: "10",
          }}>
          <DialogTitle>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Typography
                fontFamily="Shadows Into Light"
                fontSize="4em"
                sx={{
                  textShadow: "0 1px 2px rgb(255, 0, 242)",
                  transform: "rotate(-5deg)",
                }}>
                About Me
              </Typography>
              <img
                src={portrait}
                style={{
                  height: "160px",
                  borderRadius: "15px",
                  filter: "drop-shadow(4px 4px 8px rgb(255, 0, 242))",
                }}
                alt="portrait"
              />
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography fontFamily="Roboto" variant="body1" fontWeight={500} sx={{whiteSpace:"pre-wrap"}}>
              {props.description}
            </Typography>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default Nav;
