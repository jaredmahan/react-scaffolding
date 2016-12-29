import React, { Component } from "react";
import "./post.css";

interface PostProps extends React.Props<any> {
    item: any;
}

export class Post extends React.Component<PostProps, {}> {
    render() {
        return (<div key={this.props.item.id} className="post"><a target="_blank" href={this.props.item.url} >{this.props.item.title}</a></div>);
    }
}