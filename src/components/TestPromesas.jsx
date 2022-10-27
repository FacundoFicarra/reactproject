import react from "react"

export default function TestPormesas(){
    /*
    let array = ["juan", "facundo", "lucas"];
    if(array.length>0){
        console.log(array)
    }
    else{
        console.log("array no cargado")
    }
    */
   /*
    let pago=0;
    if(pago>0){
        console.log("genial")
    }
    else{
        console.log("no pago")
    }
    */

    //let pago = new Promise((res, rej)=>{})
    /*
    setinterval(()=>{
        console.log(pago)
    }, 1000)
    *//*
    setTimeout(()=>{
        res("genial pago")
        //rej("no pago")
    },3000)*/
    /*
    let pago = new Promis((res,rej)=>{
        setTimeout(()=>{
            res("genial, cumplido")
        },3000)
    })
    pago
        .then((res)=>{
            console.log(res)
        })
        .catch((e)=>{
            console.log(e)
        })
        .finally(()=>{
            console.log("aca si termino")
        })
    
        */
    

    //tarea que implementar

    let arrayDeProductos = []

    let pago = new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 100, name: "guille" });
          //rej("TODO MAL");
        }, 1000);
    });
    
    pago
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.error(e);
        })
        .finally(() => {
            console.log("aca si que termino todo!");
        });
    


    let numero=0
    let nombre="guille"
    let persona= {id:100,name:"guille",edad:40}
    let array= [
        {id:100,name:"guille",edad:40},
        {id:222,name:"perejil",edad:38},
        {id:31235,name:"juan",edad:12} 
    ]

    array=[
        <><p>id:100</p>
        <p>name:guille</p>
        <p>edad:40</p>
        </>,
        <><p>id:000</p>
        <p>name:AAAAAAAA</p>
        <p>edad:48</p>
        </>,
        <><p>id:bbbbbbbbbbBBB</p>
        <p>name:masachuses</p>
        <p>edad:37</p>
        </>]

    
    /*return(
        <div>
            <div>{numero}</div>
            <div>{nombre}</div>
            <div>{persona}</div>
            <div>{array}</div>
        </div>
    )*/








    //////////
    return <div>
        <div>
            {array.map((item)=>{
            return (
                <>
                <p>id:{item.id}</p>
                <p>name:{item.name}</p>
                <p>edad:{item.edad}</p>
                </>
            )
        })}
        </div>
    </div>
}