import React, { Component } from "react";
import {SearchBar} from "../searchBar/SearchBar";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import moment from "moment";
import "./topNav.css";

interface TopNavProps extends React.Props<any> {
}
export class TopNav extends React.Component<TopNavProps, void> {
    render() {
        return <div className="top-nav">
            <FlatButton disabled={true} style={{ minWidth: "40px", color: "#4f88e8" }} icon={<FontIcon className="material-icons">menu</FontIcon>} />
        </div>;
    };
}

export default TopNav;
