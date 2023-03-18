// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getDate() + 1).padStart(2, '0');
// let year = String(today.getDate() + 1).padStart(2, '0');

// today = mm + '/' + dd + '/' + year;
// // document.write(today)

exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString('en-IN', options);
}

exports.getDay = () => {
    const today = new Date();

    const options = {
        weekday: 'long'
    };


    return today.toLocaleDateString('en-UK', options);
}