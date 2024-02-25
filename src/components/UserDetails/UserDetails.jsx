import { useDispatch, useSelector } from "react-redux";
import { fakeUser } from "../../api";
import { addUsers, deleteUsers } from "../../store/slices/UserSlices";

const UserDetails = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const { user } = state;
    return (
        <div>
            <div>List of user details.</div>
            <button onClick={() => {
                dispatch(addUsers(fakeUser()));

            }}>Add users</button>
            <span>show users</span>
            {user.map((data, id) => {
                return (
                    <div>
                        {data}
                        <button onClick={() => {
                            dispatch(deleteUsers(id))
                        }}>delete</button>
                    </div>
                )
            })}
        </div>
    )
};

export default UserDetails;