import { People } from "@/data";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;

  const findPersonById = (person: Person) =>
    !!selectedPeople.find((p) => p.id == person.id);
  const filterPersonById = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);

  const handleChangeSelect = (person: Person) => {
    setSelectedPeople(
      findPersonById(person)
        ? filterPersonById(person)
        : [...selectedPeople, person]
    );
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="small"
          checked={findPersonById(params.row)}
          onChange={() => handleChangeSelect(params.row)}
        />
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
  ];

  return (
    <DataGrid
      columns={columns}
      rows={People}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
