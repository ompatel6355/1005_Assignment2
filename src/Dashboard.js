// src/Dashboard.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfileWidget from './ProfileWidget';
import UserListWidget from './UserListWidget';
import CustomTool1 from './CustomTool1';
import CustomTool2 from './CustomTool2';
import SubPage1 from './SubPage1';
import SubPage2 from './SubPage2';
import SubPage3 from './SubPage3';

const Dashboard = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/tool1">Tool 1</Link></li>
                        <li><Link to="/tool2">Tool 2</Link></li>
                        <li><Link to="/subpage1">SubPage 1</Link></li>
                        <li><Link to="/subpage2">SubPage 2</Link></li>
                        <li><Link to="/subpage3">SubPage 3</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/profile" element={<ProfileWidget />} />
                    <Route path="/users" element={<UserListWidget />} />
                    <Route path="/tool1" element={<CustomTool1 />} />
                    <Route path="/tool2" element={<CustomTool2 />} />
                    <Route path="/subpage1" element={<SubPage1 />} />
                    <Route path="/subpage2" element={<SubPage2 />} />
                    <Route path="/subpage3" element={<SubPage3 />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Dashboard;
