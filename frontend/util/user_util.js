export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/users'
    })
)

export const fetchUser = userId => (
    $.ajax({
        url: `api/users/${userId}`
    })
)

export const updateUser = user => {
    console.log(user);
    return (
    $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
)}