const HorizontalConnectedUsers = ({ users }) => <div className="horizontal-user-list">
    <h4 className="user-list-title">Connected Users</h4>
    <div className="flex-list">
        {users.map((u, index) => {
            return <h6 className="user" key={index}>{u}</h6>
        })}
    </div>

</div>

export default HorizontalConnectedUsers;