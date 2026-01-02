function submit(){
    const name = document.getElementById("name").value.trim();
    const mssv = document.getElementById("mssv").value.trim();
    for(let i = 0; i<name.length;i++){
        let nameCode = name.charCodeAt(i);
        if(nameCode >= 48 && nameCode <= 57){
            alert("Sao tên có số nữa z");
            return;
        }
    }
    if(name == "" || mssv == ""){
        alert("Nhập đầy đủ thông tin đê");
        return;
    }
    else if(mssv.length != 8){
        alert("MSSV có 8 số á");
        return;
    }
    document.getElementById("getName").innerText = name;
    document.getElementById("getMSSV").innerText = mssv;
    document.getElementById("form").style.display = "none";
    document.getElementById("card").style.display = "flex"
    let avt = name[0];
    for(let i = 0; i<name.length; i++){
        if(name[i] == " "){
            avt = name[i+1];
        }
        console.log(name[i])
    }
    document.getElementById("card-avt").innerText = avt;
}