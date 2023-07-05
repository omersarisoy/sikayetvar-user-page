"use client";
 import { BellIcon, Magnify, Pencil, SpeakerIcon, Trash } from "@/assets/icon";
 import { Header, StudentHero } from "@/assets/styled";
 import {
   Box,
   Button,
   IconButton,
   InputAdornment,
 } from "@mui/material";
 import { useCallback, useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { CreateNewAccountModal } from "@/components/CreateNewAccountModal";
import { validateAge, validateEmail, validateRequired } from "@/utils";
 
 const EdiTable = () => {
   const [createModalOpen, setCreateModalOpen] = useState(false);
   const [tableData, setTableData] = useState([]);
   const [validationErrors, setValidationErrors] = useState({});
 
   const handleCreateNewRow = (values) => {
     tableData.push(values);
     setTableData([...tableData]);
   };
 
   const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
     if (!Object.keys(validationErrors).length) {
       tableData[row.index] = values;
       setTableData([...tableData]);
       exitEditingMode(); 
     }
   };
 
   const handleCancelRowEdits = () => {
     setValidationErrors({});
   };
 
   const handleDeleteRow = useCallback(
     (row) => {
       if (!confirm(`Are you sure you want to delete ${row.getValue("Name")}`)) {
         return;
       }
       tableData.splice(row.index, 1);
       setTableData([...tableData]);
     },
     [tableData],
   );
 
   useEffect(() => {
     const fetchTableData = async () => {
       const response = await fetch("https://dummyjson.com/users");
       const data = await response.json();
       if (data) {
         setTableData(data.users);
       }
     };
     fetchTableData();
   }, []);
 
   const getCommonEditTextFieldProps = useCallback(
     (cell) => {
       return {
         error: !!validationErrors[cell.id],
         helperText: validationErrors[cell.id],
         onBlur: (event) => {
           const isValid =
             cell.column.id === "email"
               ? validateEmail(event.target.value)
               : cell.column.id === "age"
               ? validateAge(+event.target.value)
               : validateRequired(event.target.value);
           if (!isValid) {
             setValidationErrors({
               ...validationErrors,
               [cell.id]: `${cell.column.columnDef.header} is required`,
             });
           } else {
             delete validationErrors[cell.id];
             setValidationErrors({
               ...validationErrors,
             });
           }
         },
       };
     },
     [validationErrors],
   );
 
   const columns = useMemo(
     () => [
       {
         accessorKey: "image",
         columns: [
           {
             header: " ",
             Cell: ({ renderedCellValue, row }) => (
              <>
                 <img
                   alt="avatar"
                   height={55}
                   src={row.original.image}
                   loading="lazy"
                 />
                 <span>{renderedCellValue}</span>
               </>
             ),
           },
         ],
       },
       {
         accessorKey: "Name",
         size: 140,
         muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
           ...getCommonEditTextFieldProps(cell),
         }),
         columns: [
           {
             accessorFn: (row) => `${row.firstName} ${row.lastName}`,
             header: "Name",
             muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
               ...getCommonEditTextFieldProps(cell),
             }),
           },
         ],
       },
 
       {
         accessorKey: "email",
         header: "Email",
         muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
           ...getCommonEditTextFieldProps(cell),
           type: "email",
         }),
       },
       {
         accessorKey: "phone",
         header: "Phone",
         size: 170,
         muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
           ...getCommonEditTextFieldProps(cell),
         }),
       },
       {
         accessorKey: "domain",
         header: "Website",
         muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
           ...getCommonEditTextFieldProps(cell),
         }),
       },
       {
         accessorKey: "company",
         columns: [
           {
             accessorFn: (row) => `${row.company.name}`,
             header: "Company Name",
             muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
               ...getCommonEditTextFieldProps(cell),
             }),
           },
         ],
       },
     ],
     [getCommonEditTextFieldProps],
   );
 
   return (
     <>
       <Header>
         <SpeakerIcon />
         <BellIcon />
       </Header>
       <StudentHero>
         <MaterialReactTable
           displayColumnDefOptions={{
             "mrt-row-actions": { muiTableHeadCellProps: { align: "center" }, size: 120 },
           }}
           columns={columns}
           data={tableData}
           editingMode="modal"
           enableEditing
           onEditingRowSave={handleSaveRowEdits}
           onEditingRowCancel={handleCancelRowEdits}
           enableFullScreenToggle={false}
           enableDensityToggle={false}
           enableMultiSort={false}
           enableColumnActions={false}
           enableHiding={false}
           enableColumnFilters={false}
           enableSorting={false}
           positionActionsColumn="last"
           muiTableBodyRowProps={{
            sx: {
              height: '85px',
              borderRadius: "20px",
              backgroundColor: '#FFFFFF',
            }
          }}
          muiTableHeadCellProps={{
            sx:({
              background: '#F8F8F8',
              color: "#ACACAC",
              fontSize: 12,
              fontFamily: 'Montserrat',
            })
          }}
           muiSearchTextFieldProps={{
             className: "searchButton",
             InputProps:{
              endAdornment: (
                <InputAdornment position="start">
                  <Magnify />
                </InputAdornment>
              ),
            },
            variant:"outlined",
            placeholder: "Search...",
           }}
           initialState={{
             pagination: {
               pageSize: 6,
               pageIndex: 0,
             },
             showGlobalFilter: true,
           }}
           muiTablePaginationProps={{
             rowsPerPageOptions: [ 5, 6, 10, 15, 20],
             showFirstButton: true,
             showLastButton: false,
             SelectProps: {
               native: true,
             },
             labelRowsPerPage: "Rows per page",
           }}
           renderRowActions={({ row, table }) => (
             <Box sx={{ display: "flex", gap: "1rem" }}>
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Pencil />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Trash />
                </IconButton>
             </Box>
           )}
           renderTopToolbarCustomActions={() => {
             return (
               <>
                 <h2>Students List</h2>
                 <Button
                   color="primary"
                   onClick={() => setCreateModalOpen(true)}
                   variant="contained"
                   className="createButton"
                 >
                   ADD NEW STUDENT
                 </Button>
               </>
             );
           }}
         />
         <CreateNewAccountModal
           columns={columns}
           open={createModalOpen}
           onClose={() => setCreateModalOpen(false)}
           onSubmit={handleCreateNewRow}
         />
       </StudentHero>
     </>
   );
 };
 

 
 export default EdiTable;