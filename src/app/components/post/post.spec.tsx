import React, { Component } from "react";
import { Post } from "./Post";
import renderer from 'react-test-renderer';

describe("Post", () => {
  it("should render correctly", () => {
     const post = renderer.create(<Post url="http://www.dummyUrl.com" title="Post 1" />, {});
     expect(post).toMatchSnapshot();
  });
});