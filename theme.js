const body = document.getElementById('body');
const colors = ['bg-purple-100', 'bg-red-100', 'bg-green-50', 'bg-orange-100',  'bg-cyan-100' ,'bg-blue-50',];
let index = 0;

// theme
document.getElementById('themeBtn').addEventListener('click',
    function () {
        body.classList.remove(...colors);
        body.classList.add(colors[index]);
        index = (index + 1) % colors.length;
        // if(index != colors.length){
        //     index = index + 1
        // } else{ index = 0};
    }
)