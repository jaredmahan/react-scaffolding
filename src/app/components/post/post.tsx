import React, { Component } from "react";
//require("./post.css");

interface IPostProps extends React.Props<any> {
    title: string;
    url: string;
}

export class Post extends React.Component<IPostProps, any> {
    render() {
        return (<div  className="post"><a target="_blank" href={this.props.url} >{this.props.title}</a></div>);
    }
}