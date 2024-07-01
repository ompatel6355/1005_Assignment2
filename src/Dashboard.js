// src/Dashboard.js
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProfileWidget from './ProfileWidget';
import UserListWidget from './UserListWidget';
import CustomTool1 from './CustomTool1';
import CustomTool2 from './CustomTool2';
import SubPage1 from './SubPage1';
import SubPage2 from './SubPage2';
import SubPage3 from './SubPage3';

const Dashboard = () => {
    return ( <
        div >
        <
        nav >
        <
        ul >
        <
        li > < Link to = "/profile" > Profile < /Link></li >
        <
        li > < Link to = "/users" > Users < /Link></li >
        <
        li > < Link to = "/tool1" > Tool 1 < /Link></li >
        <
        li > < Link to = "/tool2" > Tool 2 < /Link></li >
        <
        li > < Link to = "/subpage1" > SubPage 1 < /Link></li >
        <
        li > < Link to = "/subpage2" > SubPage 2 < /Link></li >
        <
        li > < Link to = "/subpage3" > SubPage 3 < /Link></li >
        <
        /ul> < /
        nav > <
        Switch >
        <
        Route path = "/profile"
        component = { ProfileWidget }
        /> <
        Route path = "/users"
        component = { UserListWidget }
        /> <
        Route path = "/tool1"
        component = { CustomTool1 }
        /> <
        Route path = "/tool2"
        component = { CustomTool2 }
        /> <
        Route path = "/subpage1"
        component = { SubPage1 }
        /> <
        Route path = "/subpage2"
        component = { SubPage2 }
        /> <
        Route path = "/subpage3"
        component = { SubPage3 }
        /> < /
        Switch > <
        /div>
    );
};

export default Dashboard;