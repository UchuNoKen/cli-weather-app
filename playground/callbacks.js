var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Joe'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userData) => {
    console.log(userData);
});

// https://maps.googleapis.com/maps/api/geocode/json
// https://maps.googleapis.com/maps/api/geocode/json?key=value&keytwo=valuetwo 