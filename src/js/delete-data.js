function deleteData(id){
    fetch(`http://localhost:8000/cards/${id}`,{
        method:"DELETE"
    }).then(response=>response.json()).then(data=>console.log(data))
}
