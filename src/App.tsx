
import { useState } from "react";
import Auth from "./components/Auth";
import BGColor from "./components/BGColor";
import ToDo from "./components/ToDo";
import Theme from "./components/Theme";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-4 py-2 font-medium ${
            activeTab === "tab1"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          } ${activeTab === "tab1" ? "selectedButton" : ""}`}
        >
          Login
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-4 py-2 font-medium ${
            activeTab === "tab2"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          } ${activeTab === "tab2" ? "selectedButton" : ""}`}
        >
          BG Color
        </button>

        <button
          onClick={() => setActiveTab("tab3")}
          className={`px-4 py-2 font-medium ${
            activeTab === "tab3"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          } ${activeTab === "tab3" ? "selectedButton" : ""}`}
        >
          To Do List
        </button>

        <button
          onClick={() => setActiveTab("tab4")}
          className={`px-4 py-2 font-medium ${
            activeTab === "tab4"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          } ${activeTab === "tab4" ? "selectedButton" : ""}`}
        >
          Theme
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4" style={{marginTop: "20px"}}>
        {activeTab === "tab1" && <div><Auth/></div>}
        {activeTab === "tab2" && <div><BGColor/></div>}
        {activeTab === "tab3" && <div><ToDo/></div>}
        {activeTab === "tab4" && <div><Theme/></div>}
      </div>
    </div>
  );
}

export default App;
