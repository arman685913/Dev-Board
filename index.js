//desk to blogs
document.getElementById('blogs').addEventListener('click',
    function(even){
        even.preventDefault();
        window.location.href = 'blog.html';
        }
)
////historyCard
const historyCard = document.getElementById('historyCard');
//disable btn 1
const disabledBtn1 = document.getElementById('disable1');
const title1 = document.getElementById('title1').innerText;
disabledBtn1.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="w-60 bg-blue-50 rounded-lg p-3 mt-3">
                <p>
                    You have Complete The Task ${title1} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn1);
        alert('Board Updated SuccessFully');
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        };
    }
)
// 
//disable btn 2
const disabledBtn2 = document.getElementById('disable2');
const title2 = document.getElementById('title2').innerText;
disabledBtn2.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="w-60 bg-blue-50 rounded-lg p-3 mt-3">
                <p>
                    You have Complete The Task ${title2} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn2);
        alert('Board Updated SuccessFully');
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        }
    }
)
// 
//disable btn 3
const disabledBtn3 = document.getElementById('disable3');
const title3 = document.getElementById('title3').innerText;
disabledBtn3.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="w-60 bg-blue-50 rounded-lg p-3 mt-3">
                <p>
                    You have Complete The Task ${title3} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn3);
        alert('Board Updated SuccessFully');
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        }
    }
)
// 
//disable btn 4
const disabledBtn4 = document.getElementById('disable4');
const title4 = document.getElementById('title4').innerText;
disabledBtn4.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="w-60 bg-blue-50 rounded-lg p-3 mt-3">
                <p >
                    You have Complete The Task ${title4} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn4);
        alert('Board Updated SuccessFully')
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        }
    }
)
// 
//disable btn 5
const disabledBtn5 = document.getElementById('disable5');
const title5 = document.getElementById('title5').innerText;
disabledBtn5.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="bg-blue-50 w-60 rounded-lg p-3 mt-3">
                <p >
                    You have Complete The Task ${title5} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn5);
        alert('Board Updated SuccessFully');
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        }
    }
)
// 
//disable btn 6
const disabledBtn6 = document.getElementById('disable6');
const title6 = document.getElementById('title6').innerText;
disabledBtn6.addEventListener('click',
    function () {
        //task
        const task = document.getElementById('task').innerText;
        let nTask = parseFloat(task);
        nTask = nTask - 1;
        document.getElementById('task').innerText = nTask;
        // completed Task
        const completedTask = document.getElementById('completedTask').innerText;
        let nCompletedTask = parseFloat(completedTask);
        nCompletedTask = nCompletedTask + 1;
        document.getElementById('completedTask').innerText = nCompletedTask;
        //history
        const historyDiv = document.createElement('div');
        historyDiv.innerHTML = ` <div class="bg-blue-50 w-60 rounded-lg p-3 mt-3">
                <p >
                    You have Complete The Task ${title6} at ${time}
                </p>
            </div> `
        historyCard.appendChild(historyDiv);
        dable(disabledBtn6);
        alert('Board Updated SuccessFully')
        //2nd alert
        if(nTask === 0){
        alert('Congrates!!! You Have Completed All The Current Task')
        }
    }
)

