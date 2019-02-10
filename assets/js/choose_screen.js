var elems = document.getElementsByClassName('token');
var filter = ['jobs', 'help', 'hobby', 'project'];

var apply_filter = () => {
    for (let i = 0; i < elems.length; i++) {
        let classes = elems[i].classList;
        for (let j = 0; j < classes.length; j++) {
            let display = false;
            filter.forEach((v) => {
                console.log('v: ', v);
                if (classes[j] == v) {
                    display = true;
                    return ;
                }
            });
            elems[i].style.display = display ? 'block' : 'none';
        }
    }
}

var f_select = (elem) => {
    console.log('elem: ', elem);
    if (filter.includes(elem)) {
        filter.splice(filter.indexOf(elem), 1);
    } else {
        filter.push(elem);
    }
    apply_filter();
    console.log('filter: ', filter);
}

window.onload = () => {
    var GLOBAL = JSON.parse(localStorage.getItem('GLOBAL'));
    console.log('GOLBAL: ', GLOBAL);
    var name = document.getElementById('name');
    console.log('name: ', name);
    if (name) {
        name.innerHTML = "Bonjour " + GLOBAL.name + '!';
    }
}