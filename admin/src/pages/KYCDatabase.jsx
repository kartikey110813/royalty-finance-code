import React, { useState, useEffect } from "react";
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

import { ordersData, contextMenuItems, kycDatabase } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";
export const kycStatus = (props) => {
  console.log(props.ID)
  const changeStatusApprove = () => {
    db.collection("users")
      .doc(props.ID)
      .update({
        isKycComplete: true,
      })
      .then(() => {
        console.log("hello");
      });
  };

  const changeStatusDisapprove = () => {
    db.collection("users")
      .doc(props.ID)
      .update({
        isKycComplete: false,
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
const KYCDatabase = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [kycData,setKycData] = useState([]);
  const [kycDoc,setKycDoc] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setKycData(
        snapshot.docs.map((doc) =>
          ({Name: doc.data().name,
          status: doc.data().isKycComplete,
          Date: doc.data().date,
          Document1 : doc.data().Document1,
          Document2 : doc.data().Document2,
          Document3 : doc.data().Document3
        }))
      );
    });
  }, []);
  return (
    <div className="m-2 md:m-2 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="Page" title="KYC Database" />
      <GridComponent
        id="gridcomp"
        dataSource={kycData}
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
            field="Name"
            headerText="name"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
          <ColumnDirective
            field="Date"
            headerText="Date"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
          <ColumnDirective
            field="status"
            headerText="Status"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
          <ColumnDirective
            field="Document1"
            headerText="Document1"
            width="150"
            textAlign="center"
            allowEditing={false}
          />
          <ColumnDirective
          field="Document2"
          headerText="Document2"
          width="150"
          textAlign="center"
          allowEditing={false}
        />
        <ColumnDirective
        field="Document3"
        headerText="Document3"
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
            template={kycStatus}
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
      </GridComponent>
    </div>
  );
};
export default KYCDatabase;
