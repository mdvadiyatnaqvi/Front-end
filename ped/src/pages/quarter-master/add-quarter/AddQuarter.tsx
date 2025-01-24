import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import CustomInput from "../../../components/customInput/CustomInput";
import CustomSelect from "../../../components/customSelect/CustomSelect";
import CustomButton from "../../../components/customButton/CustomButton";
import CustomDatePicker from "../../../components/customDatePicker/CustomDatePicker";
import CustomHeading from "../../../components/customHeading/CustomHeading";

interface FormData {
  quarterId: string;
  quarterType: string;
  meterNo: string;
  location: string;
  address: string;
  meterType: string;
  supplyPhase: string;
  installationDate: string;
  installationReading: string;
  personName: string;
  mobileNo: string;
  email: string;
  officerCategory: string;
  designation: string;
  department: string;
  freeUnitType: string;
  freeUnits: string;
  hasSubMeter: boolean;
  subMeterNo: string;
  address1: string;
  commissionReading: string;
  comments: string;
}

const AddQuarter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    quarterId: "",
    quarterType: "",
    meterNo: "",
    location: "",
    address: "",
    meterType: "",
    supplyPhase: "",
    installationDate: "",
    installationReading: "",
    personName: "",
    mobileNo: "",
    email: "",
    officerCategory: "",
    designation: "",
    department: "",
    freeUnitType: "",
    freeUnits: "",
    hasSubMeter: false,
    subMeterNo: "",
    address1: "",
    commissionReading: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (selectedDateString: string, name: string) => {
    setFormData({ ...formData, [name]: selectedDateString });
  }

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box sx={{ padding: "16px", maxWidth: "1200px", margin: "auto" }}>
      <CustomHeading>Add Quarter :-</CustomHeading>
      <p>
        Please make sure all the fields are filled before clicking the save
        button.
      </p>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ flexGrow: 1 }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="quarterId"
              placeholder="Quater Id"
              size="small"
              label="QUARTER ID"
              isMandatory
              value={formData.quarterId}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="SELECT TYPE"
              value={formData.quarterType}
              onChange={handleSelectChange}
              name="reason4Adjustment"
              options={["Type 1", "Type 2", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="meterNo"
              placeholder="Meter No"
              label="MERTER NO"
              size="small"
              isMandatory
              value={formData.meterNo}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="LOCATION"
              value={formData.location}
              onChange={handleSelectChange}
              name="reason4Adjustment"
              options={["Loc 1", "Loc 2", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="address"
              label="ADDRESS"
              isMandatory
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="METER TYPE"
              value={formData.meterType}
              onChange={handleSelectChange}
              name="reason4Adjustment"
              options={["Single Phase", "Double Phase", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="supplyPhase"
              size="small"
              isMandatory
              label="SUPPLY PHASE"
              value={formData.supplyPhase}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomDatePicker
              name="installationDate"
              label="INSTALLATION DATE"
              isMandatory
              size="small"
              value={formData.installationDate}
              onChange={handleDropdownChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="installationReading"
              label="INSTALLATION READING"
              size="small"
              placeholder="Installation Reading"
              value={formData.installationReading}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              label="PERSON NAME"
              name="personName"
              size="small"
              placeholder="Enter Name"
              isMandatory
              value={formData.personName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="mobile"
              label="MOBILE"
              isMandatory
              size="small"
              placeholder="Enter Mobile Number"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              name="email"
              label="EMAIL"
              size="small"
              placeholder="Enter Email"
              isMandatory
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="CATEGORY OF OFFICERS"
              value={formData.officerCategory}
              onChange={handleSelectChange}
              name="officerCategory"
              options={["A", "B, C, D", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="DESIGNATION"
              value={formData.designation}
              onChange={handleSelectChange}
              name="designation"
              options={["Officer 1", "Officer 2", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="DEPARTMENT"
              value={formData.department}
              onChange={handleSelectChange}
              name="department"
              options={["Dept 1", "Dept 2", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomSelect
              isMandatory
              label="FREE UNIT TYPE"
              value={formData.freeUnitType}
              onChange={handleSelectChange}
              name="freeUnitType"
              options={["A 1", "A 2", "Other"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomInput
              label="FREE UNITS"
              isMandatory
              name="numberOfFreeUnits"
              placeholder="Enter Number"
              value={formData.freeUnits}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <CustomInput
              name="comments"
              label="COMMENTS"
              value={formData.comments}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  name="hasSubMeter"
                  checked={formData.hasSubMeter}
                  onChange={handleCheckboxChange}
                />
              }
              label="Have Sub Meter?"
            />
          </Grid>
        </Grid>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1 }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomInput
                label="SUB METER NO"
                name="subMeterNo"
                placeholder="Enter No"
                value={formData.subMeterNo}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomInput
                name="address"
                label="ADDRESS"
                size="small"
                placeholder="Enter Address"
                value={formData.address1}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomInput
                name="commissionNo"
                label="COMMISSION NO"
                size="small"
                placeholder="Enter Number"
                value={formData.commissionReading}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "15px",
          }}
        >
          <CustomButton
            variant="contained"
            size="small"
          >
            Add Record
          </CustomButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddQuarter;