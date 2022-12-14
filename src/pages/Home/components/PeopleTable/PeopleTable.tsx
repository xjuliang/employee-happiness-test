import { Person } from "@/models";
import { favoritesActions } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const dispatch = useDispatch();
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const storePeople = useSelector((store: AppStore) => store.people);
  const storeFavorites = useSelector((store: AppStore) => store.favorites);

  useEffect(() => {
    setSelectedPeople(storeFavorites);
  }, [storeFavorites]);

  const findPersonById = (person: Person) =>
    !!storeFavorites.find((p) => p.id == person.id);
  const filterPersonById = (person: Person) =>
    storeFavorites.filter((p) => p.id !== person.id);

  const handleChangeSelect = (person: Person) => {
    const filteredPeople = findPersonById(person)
      ? filterPersonById(person)
      : [...selectedPeople, person];
    dispatch(favoritesActions.addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
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
          <Checkbox
            size="small"
            checked={findPersonById(params.row)}
            onChange={() => handleChangeSelect(params.row)}
          />
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
      rows={storePeople}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
      sx={{
        minHeight: 375,
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    />
  );
};

export default PeopleTable;
