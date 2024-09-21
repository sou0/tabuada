function tabuada(){
    num = document.getElementById('tabuada')
    tab = document.getElementById('seltab')

    if(num.value.lenght === 0){
        window.alert('por favor, digite um numero')
    }

    else{
        n = Number(num.value)
        c = 1
        tab.innerHTML=''
        while (c<=10){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
}