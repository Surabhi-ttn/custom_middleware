async function getUser(username) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch('https://api.github.com/users/' + username);
    const result =  await response.json();
    return {
        "status": 200,
        "response": result
    }
}
exports.getUser = getUser;