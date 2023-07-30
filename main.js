

function Producto(id,descripcion, precio,stock){
    this.id=id
    this.descripcion=descripcion
    this.precio=precio
    this.stock=stock}
   
debugger

const producto1=new Producto(1,"blusa Jana",11000,20)
const producto2=new Producto(2,"Camisa Lara",12500,5)
const producto3=new Producto(3,"blusa Zara",9000,15)
const producto4=new Producto(4,"Blusa Juana",8500,30)
const producto5=new Producto(5,"Camisa Mara",12300,10)

let inventario =[producto1,producto2,producto3,producto4,producto5]
inventario.push({id:6,descripcion:"Camisa Anna",precio:8550,stock:5})
inventario.push({id:7,descripcion:"Camisa Anna",precio:8550,stock:5})
console.table(inventario)
let carrito=[]


let repetir=confirm ("¿Desea realizar una compra?") 
        while(repetir){
             
            if(repetir==false) { 
                
                break}
               
                let codigoPrenda=parseInt(prompt("Ingrese código de producto:",))

                
            const encontrado=inventario.find((x)=> x.id==codigoPrenda) 

                if(encontrado!=undefined)
                {
                   console.log("entre al if")
                    carrito.push= ({id:encontrado.id,descripcion:encontrado.descripcion,precio:encontrado.precio,stock:encontrado.stock})
                
                  

               
                }
                else{alert("Por favor ingrese un código válido")}
            
            repetir=confirm ("¿Desea ingresar nuevo articulo?")

        }
        console.table(carrito)
        console.log(carrito.length)
      
 /*prenda=prompt("Ingrese que tipo de prenda desea buscar:",).tri().toLowerCase()
alert(prenda)

        inventario.forEach(function(mercaderia){console.log(mercaderia)})
        let coincidencia=inventario.filter((producto)=>producto.descripcion.toLowerCase().includes(prenda))
        
       console.table(coincidencia)

       const doble = inventario.map((producto)=>producto.id+' '+producto.descripcion+'  '+ producto.precio*0.90);

console.table(doble);

inventario.forEach(function(prenda){prenda.precio*1,21;console.log(prenda.descripcion+' ' +prenda.precio)})

const encontrado=inventario.find((x)=> x.id==5) ;console.log(encontrado)
const resultado=inventario.filter((x)=> x.precio<10000)
console.table(resultado)*/
