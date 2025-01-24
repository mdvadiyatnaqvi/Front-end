import React, { useState } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import CustomInput from "../../../components/customInput/CustomInput";
import CustomButton from "../../../components/customButton/CustomButton";
import CustomSearchComponent from "../../../components/customSearchComponent/CustomSearchComponent";

const AddBill: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleAddBill = () => {
  }

  const handleSearch = () => {
  }

  const handleClear = () => {
    setSearchText('')
  }

  return (
    <Box sx={{ padding: 2, maxWidth: "1200px", margin: "auto" }}>
      <CustomSearchComponent
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleClear={handleClear}
        title="Search Meter Number :"
        placeholder="Search Meter Number"
        inputLabel="Enter Meter No."
        styles={{
          container: { marginBottom: "20px", paddingRight: 6 },
          inputField: { borderColor: "rgb(137 192 234)" },
        }}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Personal Detail
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="personalName"
                label="Personal Name"
                value=""
                onChange={() => { }}
                placeholder="Person Name"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="email"
                label="Email"
                value=""
                onChange={() => { }}
                placeholder="E-mail"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="mobileNo"
                label="Mobile No"
                value=""
                onChange={() => { }}
                placeholder="Mobile No"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="designation"
                label="Designation"
                value=""
                onChange={() => { }}
                placeholder="Designation"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="department"
                label="Department"
                value=""
                onChange={() => { }}
                placeholder="Department"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="departmentCode"
                label="Department Code"
                value=""
                onChange={() => { }}
                placeholder="Department Code"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                name="address"
                label="Address"
                value=""
                onChange={() => { }}
                placeholder="Address"
                isMandatory={true}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Quarter Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Quarter Detail
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="quarterId"
                label="Quarter ID"
                value=""
                onChange={() => { }}
                placeholder="Quarter ID"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="quarterType"
                label="Quarter Type"
                value=""
                onChange={() => { }}
                placeholder="Quarter Type"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="location"
                label="Location"
                value=""
                onChange={() => { }}
                placeholder="Location"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="meterType"
                label="Meter Type"
                value=""
                onChange={() => { }}
                placeholder="Meter Type"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="supplyPhase"
                label="Supply Phase"
                value=""
                onChange={() => { }}
                placeholder="Supply Phase"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomInput
                name="commDate"
                label="Comm. Date"
                value=""
                onChange={() => { }}
                placeholder="Comm. Date"
                isMandatory={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                name="freeUnitType"
                label="Free Unit Type"
                value=""
                onChange={() => { }}
                placeholder="Free Unit Type"
                isMandatory={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box mb={3} sx={{ marginTop: "15px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Meter Detail (Main)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="meterNoMain"
              label="Meter No"
              value=""
              onChange={() => { }}
              placeholder="Meter No"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="periodFrom"
              label="Period From"
              value=""
              onChange={() => { }}
              placeholder="Period From"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="periodTo"
              label="Period To"
              value=""
              onChange={() => { }}
              placeholder="Period To"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="readingFrom"
              label="Reading From"
              value=""
              onChange={() => { }}
              placeholder="Reading From"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="readingTo"
              label="Reading To"
              value=""
              onChange={() => { }}
              placeholder="Reading To"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="unitConsumed"
              label="Unit Consumed"
              value=""
              onChange={() => { }}
              placeholder="Unit Consumed"
              isMandatory={true}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Meter Detail (Sub)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="meterNoSub"
              label="Meter No"
              value=""
              onChange={() => { }}
              placeholder="Meter No"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="addressSub"
              label="Address"
              value=""
              onChange={() => { }}
              placeholder="Address"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="readingFromSub"
              label="Reading From"
              value=""
              onChange={() => { }}
              placeholder="Reading From"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="readingToSub"
              label="Reading To"
              value=""
              onChange={() => { }}
              placeholder="Reading To"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="unitConsumedSub"
              label="Unit Consumed"
              value=""
              onChange={() => { }}
              placeholder="Unit Consumed"
              isMandatory={true}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Current Bill Detail
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="totalUnitConsumed"
              label="Total Unit Consumed"
              value=""
              onChange={() => { }}
              placeholder="Total Unit Consumed"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="freeUnits"
              label="Free Units"
              value=""
              onChange={() => { }}
              placeholder="Free Units"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="chargeableUnit"
              label="Chargeable Unit"
              value=""
              onChange={() => { }}
              placeholder="Chargeable Unit"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="totalUnitCharges"
              label="Total Unit Charges"
              value=""
              onChange={() => { }}
              placeholder="Total Unit Charges"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="meterRent"
              label="Meter Rent"
              value=""
              onChange={() => { }}
              placeholder="Meter Rent"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="currentBill"
              label="Current Bill"
              value=""
              onChange={() => { }}
              placeholder="Current Bill"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="prevBalance"
              label="Prev. Balance"
              value=""
              onChange={() => { }}
              placeholder="Prev. Balance"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="payableAmount"
              label="Payable Amount"
              value=""
              onChange={() => { }}
              placeholder="Payable Amount"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="payableDueAmount"
              label="Payable Due Amount"
              value=""
              onChange={() => { }}
              placeholder="Payable Due Amount"
              isMandatory={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="remarks"
              label="Remarks"
              value=""
              onChange={() => { }}
              placeholder="Remarks"
              isMandatory={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CustomInput
              name="dueDate"
              label="Due Date"
              value=""
              onChange={() => { }}
              placeholder="Due Date"
              isMandatory={true}
            />
          </Grid>
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
              onClick={handleAddBill}
            >
              Add Bill
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddBill;