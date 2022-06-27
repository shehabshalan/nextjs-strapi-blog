import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useEffect, useState } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

/// to do - convert auth buttons to small burger menu and remove all buttons on small screen
/// to do - implement search

import Link from "next/link";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("token");
    if (item) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={2} md={2} lg={2}>
              <Link href="/">
                <Typography variant="h6" noWrap component="div">
                  NB
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>

            {isAuthenticated ? (
              <Grid item xs={4} md={4} lg={4}>
                <Link href="/createblog">
                  <Button variant="outlined" color="secondary">
                    Create Blog
                  </Button>
                </Link>
              </Grid>
            ) : (
              <Grid item xs={4} md={4} lg={4}>
                <Link href="/login">
                  <Button variant="outlined" color="secondary">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 2, mr: 2 }}
                  >
                    Create account
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
