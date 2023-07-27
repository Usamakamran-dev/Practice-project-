import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Navbar/RootLayout";
import HomePage from "../components/homepage/HomePage";
import GroupPage from "../components/GroupPage/GroupPage";
import Contacts from "../components/Contacts/Contacts";
import GroupChatPage from "../components/GroupChatPage/GroupChatPage";
import React from "react";

const router=createBrowserRouter([
    {path: "/", 
     element: <RootLayout></RootLayout>,
     children:[
     {index: true, element: <HomePage></HomePage>},
     {path: "/groups", element: <GroupPage></GroupPage>},
     {path: "/:groupId ", element: <GroupChatPage></GroupChatPage>},
     {path: "/contacts", element: <Contacts></Contacts>}
     ]},
     {path: '*' , element: <div><p> Page Not Found </p></div>}
     ])
     export default router;

