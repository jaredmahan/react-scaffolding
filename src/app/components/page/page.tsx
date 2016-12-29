import React, { Component } from "react";
import { Post } from "../Post/Post";
import FlatButton from "material-ui/FlatButton";

// This would be imported via webpack and could use sass or less
import "./page.css";

interface PageProps extends React.Props<any> {
    name: string;
    items: Array<any>;
    isFetching: boolean;

}

export class Page extends React.Component<PageProps, {}> {
    render() {
        return (<div className="page">
            {this.props.isFetching ? <div>Loading...</div> : this.props.items.map(item => <Post key={item.id} item={item} />)}
        </div>);
    }
}