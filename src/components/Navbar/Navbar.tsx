import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed" sx={{ background: "#454545" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees Management Table
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
