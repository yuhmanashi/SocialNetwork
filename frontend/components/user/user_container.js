import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import User from "./user";

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(null, mDTP)(User);