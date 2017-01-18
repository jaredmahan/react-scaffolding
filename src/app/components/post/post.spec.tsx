import * as React from "react";
import * as ReactDOM from "react-dom";


// Test Utils throwing the following error when trying to shallow render the component:
// TypeError: Cannot read property 'contextTypes' of undefined

import TestUtils from "react-addons-test-utils";
import shallowTestUtils from "react-shallow-testutils";
import { Post } from "./Post";

// export class Post extends React.Component<any, any> {
//     render() {
//         return (<div  className="post"><a target="_blank" href={this.props.url} >{this.props.title}</a></div>);
//     }
// }

describe("Post", () => {
    let renderer: TestUtils.ShallowRenderer;
    beforeEach(() => {
        let fakeItem = { id: 1, title: 'Post 1', url: 'http://www.dummyUrl.com' };
        renderer = TestUtils.createRenderer();
        renderer.render(<Post url={fakeItem.url}  title={fakeItem.title} />, {});
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.type, "div");
    });

    it("should have correct prop values", () => {
        const result = renderer.getRenderOutput();
        chai.assert.strictEqual(result.props.children.props.children, "Post 1");
    });
});