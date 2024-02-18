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

import { contextMenuItems } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";

export const gridAffiliateStatus = (props) => {
  const changeStatusApprove = () => {
    db.collection("Affiliate-users")
      .doc(props.id)
      .update({
        Verified_affiliate: true,
      })
      .then(() => {
        console.log("hello");
      });
  };

  const changeStatusDisapprove = () => {
    db.collection("Affiliate-users")
      .doc(props.id)
      .update({
        Verified_affiliate: false,
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

const AffiliateRequests = () => {
  const editing = { allowEditing: true, allowUpdating: true };

  const [affiliateUsers, setAffiliateUsers] = useState([]);

  useEffect(() => {
    db.collection("Affiliate-users").onSnapshot((snapshot) => {
      setAffiliateUsers(
        snapshot.docs.map((doc) => ({
          Name: doc.data().email,
          status: doc.data().Verified_affiliate,
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="m-2 md:m-2 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="Page" title="Affiliate Requests" />
      <GridComponent
        id="gridcomp"
        dataSource={affiliateUsers}
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
            headerText="Email"
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
export default AffiliateRequests;
