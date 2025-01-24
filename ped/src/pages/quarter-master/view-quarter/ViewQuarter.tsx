import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTable from "../../../components/customTable/CustomTable";
import CustomSearchComponent from "../../../components/customSearchComponent/CustomSearchComponent";

interface RowData {
  quarterId: string;
  quarterType: string;
  meterNo: string;
  supplyPhase: string;
  name: string;
  mobileNo: string;
  designation: string;
  departmentCode: number;
}

const data: RowData[] = [
  {
    quarterId: "1000013A1",
    quarterType: "Type VI",
    meterNo: "K-1144256",
    supplyPhase: "Single Phase",
    name: "ADVANCE CONSTRUCTION COMPANY",
    mobileNo: "",
    designation: "PRIVATE",
    departmentCode: 139,
  },
  {
    quarterId: "1000013B1",
    quarterType: "Type VI",
    meterNo: "147032",
    supplyPhase: "Three Phase",
    name: "ADVANCE CONSTRUCTION",
    mobileNo: "",
    designation: "PRIVATE",
    departmentCode: 139,
  },
  {
    quarterId: "1000031A1",
    quarterType: "Type VI",
    meterNo: "220796",
    supplyPhase: "Three Phase",
    name: "M/S JMC PROJECTS(INDIA) LTD.",
    mobileNo: "",
    designation: "TEMPORARY",
    departmentCode: 139,
  },
  {
    quarterId: "100010",
    quarterType: "Type VI",
    meterNo: "XYZ000",
    supplyPhase: "Three Phase",
    name: "VODAFONE",
    mobileNo: "965489328",
    designation: "PRIVATE",
    departmentCode: 139,
  },
  {
    quarterId: "10001A1",
    quarterType: "Type I",
    meterNo: "297737",
    supplyPhase: "Single Phase",
    name: "SURAJ",
    mobileNo: "",
    designation: "SAFAIWALA",
    departmentCode: 106,
  },
];

const columns = [
  { key: "quarterId", label: "Quarter ID", width: 80 },
  { key: "quarterType", label: "Quarter Type", width: 100 },
  { key: "meterNo", label: "Meter No", width: 80 },
  { key: "supplyPhase", label: "Supply Phase", width: 100 },
  { key: "name", label: "Name", width: 250 },
  { key: "mobileNo", label: "Mobile No", width: 80 },
  { key: "designation", label: "Designation", width: 10 },
  { key: "departmentCode", label: "Department Code", width: 150 },
];

const ViewQuarter: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
  }

  const handleClear = () => {
    setSearchText('')
  }

  return (
    <Box>
      <CustomSearchComponent
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleClear={handleClear}
        placeholder="Quarter No."
        inputLabel="Enter Quarter No."
        title="Quarter Detail by Quarter No:"
        styles={{
          container: { marginBottom: "20px", paddingRight: 6 },
          inputField: { borderColor: "rgb(137 192 234)" },
        }}
      />

      <CustomTable columns={columns} data={data} totalDataCount={data.length} />
    </Box>
  );
};

export default ViewQuarter;