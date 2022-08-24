
const ConnectedUsers = ({users}) => <div className="user-list">
    <h4 className="user-list-title">Connected Users</h4>
    {users.map((u, index) => {
        return <h6 className="user" key={index}>{u}</h6>
    })}
</div>

export default ConnectedUsers;