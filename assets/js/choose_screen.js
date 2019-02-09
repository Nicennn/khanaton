// var elems = document.getElementsByClassName('token');
// 
// var selected = {
//     jobs: true,
//     hobby: true,
//     projects: true,
//     help: true
// };
// 
// var select_job = () => {
//     selected.jobs = !selected.jobs;
// 
//     if (!selected.jobs) {
//         let is_job = false;
//         let is_hobby = false;
//         let is_projects = false;
//         let is_help = false;
// 
//         for (let i = 0; i < elems.length; i++) {
//             let classes = elems[i].classList;
//             for (let j = 0; j < classes.length; j++) {
//                 is_job = classes[j] == "jobs" ? true : false;
//                 is_help = classes[j] == "help" ? true : false;
//                 is_projects = classes[j] == "project" ? true : false;
//                 is_hobby = classes[j] == "hobby" ? true : false;
//             }
//             if (is_job) {
//                 elems[i].style.display = 'block';
//         }
//     } else {
//         for (let i = 0; i < elems.length; i++) {
//             elems[i].style.display = 'block';
//         }
//     }
// }
// 
// var select_hobby = () => {
//     selected.hobby = !selected.hobby;
// 
//     if (!selected.hobby) {
//         let is_hobby = false;
// 
//         for (let i = 0; i < elems.length; i++) {
//             let classes = elems[i].classList;
//             for (let j = 0; j < classes.length; j++) {
//                 is_hobby = classes[j] == "hobby" ? true : false;
//             }
//             if (!is_hobby) {
//                 elems[i].style.display = 'none';
//             }
//         }
//     } else {
//         for (let i = 0; i < elems.length; i++) {
//             elems[i].style.display = 'block';
//         }
//     }
// }
// 
// var select_project = () => {
//     selected.projects = !selected.projects;
// 
//     if (!selected.projects) {
//         let is_projects = false;
// 
//         for (let i = 0; i < elems.length; i++) {
//             let classes = elems[i].classList;
//             for (let j = 0; j < classes.length; j++) {
//                 is_projects = classes[j] == "project" ? true : false;
//             }
//             if (!is_projects) {
//                 elems[i].style.display = 'none';
//             }
//         }
//     } else {
//         for (let i = 0; i < elems.length; i++) {
//             elems[i].style.display = 'block';
//         }
//     }
// }
// 
// var select_help = () => {
//     selected.help = !selected.help;
// 
//     if (!selected.help) {
//         let is_help = false;
// 
//         for (let i = 0; i < elems.length; i++) {
//             let classes = elems[i].classList;
//             for (let j = 0; j < classes.length; j++) {
//                 is_help = classes[j] == "help" ? true : false;
//             }
//             if (!is_help) {
//                 elems[i].style.display = 'none';
//             }
//         }
//     } else {
//         for (let i = 0; i < elems.length; i++) {
//             elems[i].style.display = 'block';
//         }
//     }
// }