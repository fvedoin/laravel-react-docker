import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Navigate } from 'react-router';

import People from "./pages/People";
import Friends from "./pages/Friends";
import FriendsOfFriends from "./pages/FriendsOfFriends";
import Suggestions from "./pages/Suggestions";

function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Navigate to="/people" />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:id/friends/" element={<Friends />} />
                <Route path="/people/:id/friends_of_friends/" element={<FriendsOfFriends />} />
                <Route path="/people/:id/suggestions/" element={<Suggestions />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found</h2>
                        </div>
                    }
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;