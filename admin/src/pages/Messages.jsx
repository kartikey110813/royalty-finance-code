import React from "react";
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

import { ordersData, contextMenuItems, messages } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

const Messages = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [userMessage, setUserMessage] = useState([]);

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      setUserMessage(
        snapshot.docs.map((doc) => ({
          ID: doc.id,
          Name: doc.data().userName,
          Messages: doc.data().message,
        }))
      );
    });
  }, []);

  return (
    <div className="m-2 md:m-2 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="Page" title=" Messages" />
      <GridComponent
        id="gridcomp"
        dataSource={userMessage}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {messages.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
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
export default Messages;
