import React from 'react';
import DynamicTable from "./components/dynamicTable";
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import "../src/components/sidebar/index.css"

const App: React.FC = () => {
  return (
    <div className='main_container'>
      <div>
        <Header />
      </div>
      <div className='content_container'>
        <div className='sidebar_container'>
          <Sidebar />
        </div>
        <div className='container'>
             <DynamicTable/> </div>
      </div>
    </div>
  );
};

export default App;
