// src/components/NavigationBar.js
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import appLogo from "../../public/appLogo.png";

const pages = [
  { PageTitle: "Home", Section: "home", href: "/" },
  { PageTitle: "About", Section: "about", href: "/#about" },
  { PageTitle: "Programs", Section: "program", href: "/#program" },
  { PageTitle: "Contact", Section: "contact", href: "/#contact" },
  { PageTitle: "Blogs", Section: "blogs", href: "/blogs" },
];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Only run on client side after hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = React.useCallback(
    (page) => {
      handleCloseNavMenu();

      if (!mounted) return;

      const isHomePage = pathname === "/";

      if (page.PageTitle === "Home") {
        router.push("/");
      } else if (page.PageTitle === "Blogs") {
        router.push("/blogs");
      } else if (isHomePage && page.Section !== "blogs") {
        // Only access DOM after mounted
        const element = document.getElementById(page.Section);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        router.push(`/#${page.Section}`);
      }
    },
    [mounted, pathname, router]
  );

  // Safe function to check active page - only runs after hydration
  const isActivePage = React.useCallback(
    (page) => {
      if (!mounted) return false;

      if (page.PageTitle === "Home" && pathname === "/") return true;
      if (page.PageTitle === "Blogs" && pathname.startsWith("/blogs"))
        return true;

      return false;
    },
    [mounted, pathname]
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "70px",
                  width: "auto",
                }}
              >
                <Image
                  src={appLogo}
                  alt="App Logo"
                  height={70}
                  width={70}
                  style={{
                    height: "70px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Box>
            </Typography>
          </Link>

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                },
              }}
            >
              {pages.map((page) => {
                const isActive = isActivePage(page);

                if (page.PageTitle === "Blogs") {
                  return (
                    <MenuItem
                      key={page.PageTitle}
                      component={Link} // <- هنا
                      href="/blogs" // <- هنا
                      onClick={handleCloseNavMenu} // optional: لغلق menu
                      sx={{
                        fontWeight: isActive ? 600 : 400,
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      {page.PageTitle}
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={page.PageTitle}
                    onClick={() => handleNavigation(page)}
                    sx={{
                      backgroundColor: isActive
                        ? "rgba(0,0,0,0.1)"
                        : "transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "black",
                        width: "100%",
                      }}
                    >
                      {page.PageTitle}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  position: "relative",
                  height: "70px",
                  width: "auto",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={appLogo}
                  alt="App Logo"
                  height={70}
                  width={70}
                  style={{
                    height: "70px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Box>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "auto",
              gap: 1,
            }}
          >
            {pages.map((page) => {
              const isActive = isActivePage(page);

              if (page.PageTitle === "Blogs") {
                return (
                  <Button
                    key={page.PageTitle}
                    component={Link} // <- هنا
                    href="/blogs" // <- هنا
                    sx={{
                      my: 2,
                      color: "white",
                      textTransform: "none",
                      fontWeight: isActive ? 600 : 500,
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    {page.PageTitle}
                  </Button>
                );
              }

              return (
                <Button
                  key={page.PageTitle}
                  onClick={() => handleNavigation(page)}
                  sx={{
                    my: 2,
                    color: "white",
                    textTransform: "none",
                    fontWeight: isActive ? 600 : 500,
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  {page.PageTitle}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
