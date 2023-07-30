

function Producto(id,descripcion, precio,stock){
    this.id=id
    this.descripcion=descripcion
    this.precio=precio
    this.stock=stock}

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
                   
                    carrito.push (encontrado)
                
                  

               
                }
                else{alert("Por favor ingrese un código válido")}
            
            repetir=confirm ("¿Desea ingresar nuevo articulo?")

        }
       
        
       console.log("Su carrito de compras tiene los siguientes articulos: ")
        console.table(carrito)
        console.log(new Date())
        console.log("Aprovecha las rebajas de último momento, todo un 15% OFF")
        const rebaja = inventario.map((producto)=>producto.id+' '+producto.descripcion+'  '+ Math.ceil(producto.precio*0.85));
        console.table(rebaja)
      
        
      