import React from "react";
// import { usePreventScreenCapture } from "expo-screen-capture";
import PdfViewer from "./pdfViewer";
import PDF from "./file/test.pdf";
import "./App.css";

const App = () => (
  <div className="content">
    {/* {usePreventScreenCapture()} */}
    <h1>PDF Viewer Example</h1>
    <PdfViewer pdf={PDF} />
  </div>
);

export default App;
