import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, withdrawl } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const WithdrawAmountSet = (props) => {
  const [open, setOpen] = useState(false);
  const [amount,setAmount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
e.preventDefault()
setAmount(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(amount)
    db.collection("WithdrawRequest")
      .doc(props.ID)
      .update({
        amount: amount,
      })
      .then(() => {
        console.log("hello");
      }).catch((err)=>{
        console.log(err)
      });
  };


  return (
    <div>
    <Button onClick={handleOpen}>Change Amount</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  component="form" onSubmit={handleSubmit}>
        <TextField
                            margin="normal"
                            fullWidth
                            name="amount"
                            label="Amount"
                            type="text"
                            id="Amount"
                            value={amount}
                            onChange={handleChange}
                            style={{ background: 'white' }}
                            variant="filled"
                        />
      <br/>
      <br/>
      <Button variant="outlined" type="submit">Change</Button>
    </Box>
      </Modal>
      </div>

  );
};
export const gridAffiliateStatus = (props) => {
  console.log(props.ID)
  const changeStatusApprove = () => {
    db.collection("WithdrawRequest")
      .doc(props.ID)
      .update({
        aproove: true,
      })
      .then(() => {
        console.log("hello");
      });
  };

  const changeStatusDisapprove = () => {
    db.collection("WithdrawRequest")
      .doc(props.ID)
      .update({
        aproove: false,
      })
      .then(() => {
        console.log("hello");
      });
  };
  return (
    <div>
      <button
        type="button"
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        style={{ background: "green", color: "white" }}
        onClick={changeStatusApprove}
      >
        Approve
      </button>
      <br />
      <button
        type="button"
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        style={{ background: "red", color: "white" }}
        onClick={changeStatusDisapprove}
      >
        Disapprove
      </button>
      </div>

  );
};
const Withdrawls = (props) => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [withdrawRequest, setWithdrawRequest] = useState([]);

  useEffect(() => {
    db.collection("WithdrawRequest").onSnapshot((snapshot) => {
      setWithdrawRequest(
        snapshot.docs.map((doc) => ({
          Name: doc.data().name,
          // status: doc.data().Verified_affiliate,
          ID: doc.id,
          Verified: doc.data().verified,
          Amount : doc.data().amount,
          Method : doc.data().method,
          Aproove: doc.data().aproove
        }))
      );
    });
  }, []);
  return (
    <div className="m-2 md:m-2 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="Page" title=" Withdrawls" />
    { withdrawRequest && ( <GridComponent
        id="gridcomp"
        dataSource={withdrawRequest}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ColumnDirective
            field="ID"
            headerText="ID"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
          <ColumnDirective
            field="Name"
            headerText="Name"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
           <ColumnDirective
            field="Verified"
            headerText="Verified"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
           <ColumnDirective
            field="Amount"
            headerText="Withdraw Amount"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
           <ColumnDirective
            field="Method"
            headerText="Withdraw Method"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
             <ColumnDirective
            field="Aproove"
            headerText="Aproove"
            width="150"
            textAlign="center"
            allowEditing={false}
          />

          <ColumnDirective
            field="Approve_Disapprove"
            headerText="Approve_Disapprove"
            width="150"
            textAlign="center"
            allowEditing={false}
            template={gridAffiliateStatus}
          />
          <ColumnDirective
            field="Enter Amount"
            headerText="Enter Amount"
            width="150"
            textAlign="center"
            allowEditing={false}
            template={WithdrawAmountSet}
          />
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>)}
    </div>
  );
};
export default Withdrawls;
