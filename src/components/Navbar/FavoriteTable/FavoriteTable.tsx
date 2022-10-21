import { Person } from "@/models";
import { favoritesActions } from "@/redux/states";
import { AppStore } from "@/redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const dispatch = useDispatch();
  const pageSize = 5;
  const storeFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClickDelete = (person: Person) => {
    dispatch(favoritesActions.removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleClickDelete(params.row)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={storeFavorites}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
      sx={{ minHeight: 375 }}
    />
  );
};

export default FavoriteTable;
