function update(){
    tit = document.getElementById('title').value;
    des = document.getElementById('description').value;
    if (localStorage.getItem('itemsjson') == null) {
        itemsjsonarr = [];
        itemsjsonarr.push([tit, des]);
        localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarr));

    }
    else {
        itemsjsonarrstr = localStorage.getItem('itemsjson');
        itemsjsonarr = JSON.parse(itemsjsonarrstr);
        itemsjsonarr.push([tit, des]);
        localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarr));

    }
    // Fill the Table
    tablebody = document.getElementById('tablebody');
    let str = "";
    itemsjsonarr.forEach((element, index) => {
        str +=`
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete</button>
                </td>

            </tr >`
            ;
        tablebody.innerHTML = str;

    });
}
add = document.getElementById('add');
add.addEventListener('click', update) ;

function deleted(itemind){
    console.log("delete" , itemind);
    itemsjsonarr = localStorage.getItem('itemsjson')
    itemsjsonarr = JSON.parse(itemsjsonarrstr);
    itemsjsonarr.splice(itemind , 1);

    localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarr));
    
}
