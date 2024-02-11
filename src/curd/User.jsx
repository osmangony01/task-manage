

const User = (index, item) => {
    return (
        <tr key={index}>
            <td>{ index + 1}</td>
            <td>{item.name}</td>
            <td>{ item.email}</td>
            <td>{ item.password}</td>
            <td>{ item.bio}</td>
        </tr>
    );
};

export default User;