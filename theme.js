const body = document.getElementById('body');
const colors = [
  'bg-purple-100', 'bg-red-100', 'bg-green-50', 'bg-orange-100', 'bg-cyan-100', 'bg-blue-50',
  'bg-pink-100', 'bg-yellow-100', 'bg-teal-100', 'bg-indigo-100', 'bg-lime-100',
  'bg-emerald-100', 'bg-rose-100', 'bg-sky-100', 'bg-fuchsia-100', 'bg-amber-100',
  'bg-violet-100', 'bg-stone-100', 'bg-gray-100', 'bg-slate-100',
  'bg-purple-200', 'bg-blue-200', 'bg-green-200', 'bg-pink-200', 'bg-orange-200'
];

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