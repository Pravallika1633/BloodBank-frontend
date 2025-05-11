import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import About from './components/About';
import SearchBlood from './components/SearchBlood';
import BecomeDonor from './components/BecomeDonor';
import Login from './components/Login';
import Contact from './components/Contact';
import Admin_Index from './components/admin/Admin_Index';
import Add_Blood from './components/admin/Add_Blood';
import Admin_Home from './components/admin/Admin_Home';
import Manage_Blood from './components/admin/Manage_Blood';
import Add_Donor from './components/admin/Add_Donor';
import Manage_Donorlist from './components/admin/Manage_Donorlist';
import Unread_Queries from './components/admin/Unread_Queries';
import Read_Queries from './components/admin/Read_Queries';
import Dates_Report from './components/admin/Dates_Report';
import Donor_Search from './components/admin/Donor_Search';
import Search_Contact from './components/admin/Search_Contact';
import Edit_Blood from './components/admin/Edit_Blood';
import View_Donorlist from './components/admin/View_Donorlist';
import Change_Password from './components/admin/Change_Password';
import View_Queries from './components/admin/View_Queries';

function App() {
  return (
    <Routes>
      <Route path='/index' element={<Index />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/SearchBlood' element={<SearchBlood />}></Route>
      <Route path='/BecomeDonor' element={<BecomeDonor />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Admin_Index />}>
      <Route path='' element={<Admin_Home />}></Route>
      <Route path='/add_blood' element={<Add_Blood />}></Route>
      <Route path='/manage_blood' element={<Manage_Blood />}></Route>
      <Route path='/add_donor' element={<Add_Donor />}></Route>
      <Route path='/manage_donorlist' element={<Manage_Donorlist />}></Route>
      <Route path='/unread_queries' element={<Unread_Queries />}></Route>
      <Route path='/read_queries' element={<Read_Queries />}></Route>
      <Route path='/dates_report' element={<Dates_Report />}></Route>
      <Route path='/donor_search' element={<Donor_Search />}></Route>
      <Route path='/search_contact' element={<Search_Contact />}></Route>
      <Route path='/edit_blood/:id' element={<Edit_Blood />}></Route>
      <Route path='/view_donorlist/:id' element={<View_Donorlist />}></Route>
      <Route path='/change_password' element={<Change_Password />}></Route>
      <Route path='/view_queries/:id' element={<View_Queries />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
