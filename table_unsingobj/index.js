    let dataheader=["id","name","email","address","mob_no"]
    let data=[
       {
            id:"1",
            name:"mayank",
            email:"mayank@gmail.com",
            address:"ujjain naka ,indore",
            mob_no:987654324,
        },
        {
            id:"2",
            name:"ashish",
            email:"ashish@gmail.com",
            address:"dewas naka ,indore",
            mob_no:987654323,
        },
        {
            id:"3",
            name:"prayag",
            email:"prayag@gmail.com",
            address:" bangali chouraha ,indore",
            mob_no:987654322,
        },
        {
            id:"4",
            name:"mohit",
            email:"mohit@gmail.com",
            address:" rau ,indore",
            mob_no:987654321,
        },
        {
            id:"5",
            name:"dev",
            email:"dev@gmail.com",
            address:"vijay nagar,indore",
            mob_no:98765432,
        },
        {
            id:"6",
            name:"aman",
            email:"aman@gmail.com",
            address:"sudama nagar, indore",
            mob_no:98765432,
        }
    ]
    // table header
    let table=document.getElementById("table")
    let table_row=document.createElement("tr")
    let table_head;
    dataheader.forEach((value)=>{
        console.log(value)
        table_head=document.createElement("th")
        table_head.innerHTML=value
        table_row.append(table_head)
    })
    table.append(table_row)
       //table row data
       data.forEach((value)=>{
        let table_row=document.createElement("tr")
        let object_value=Object.values(value);
        object_value.forEach((v)=>{
           table_id=document.createElement("td")
           table_id.innerHTML=v
           table_row.append(table_id)
        })
        table.append(table_row)
    })
