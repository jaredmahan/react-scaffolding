import { connect } from "react-redux";

import { Page } from "../components/page/Page";
import moment from "moment";

const mapStateToProps = (state) => {
    return { name: state.name, items: state.items, isFetching: state.isFetching };
};

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;