var figlet = require('figlet');
figlet.text('Develhope!', {
    font: '3D Diagonal',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 600,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});