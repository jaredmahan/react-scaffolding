import React, { Component } from "react";
import { Post } from "../Post/Post";

// This would be imported via webpack and could use sass or less
require("./page.scss");

interface PageProps extends React.Props<any> {
    name: string;
    items: Array<any>;
    isFetching: boolean;

}

export class Page extends React.Component<PageProps, {}> {
    render() {
        return (<div className="page">
            {this.props.isFetching ?
                 <div>Loading...</div> :
                 this.props.items.map(item => <Post key={item.id} url={item.url} title={item.title} />)
                }
        </div>);
    }
}