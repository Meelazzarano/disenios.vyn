import suncreen from '../Assets/sunscreen.jpg';
import blackout from '../Assets/blackout.jpg';
import duoeclipse from '../Assets/eclipse.jpg';
import dobles from '../Assets/dobles.jpg';

export const products = [
    {id:1, category:'Cortina', title:'Sunscreen', price:100, pictureURL: suncreen, descrip:'Las cortinas Sunscreen están confeccionadas con telas microperforadas, lo que permite el ingreso de luz en los ambientes. Minimizan los efectos nocivos de los rayos ultravioleta, protegiendo y preservando los pisos y muebles. De uso común en salas de estar, cocinas, cuartos de lavado.'},
    {id:2, category:'Cortina',title:'Black Out', price:300, pictureURL: blackout, descrip:'El material utilizado en las cortinas black out es el PVC, el más grueso disponible. Esto las hace completamente opacas, impidiendo el paso de la luz y la visibilidad a través de ellas. Otra ventaja es que se trata de un aislante térmico y sonoro, lo que las vuelve perfectar para habitaciones.'},
    {id:3, category:'Cortina', title:'Duo Eclipse', price:250, pictureURL: duoeclipse, descrip:'Las cortinas Duo ofrece los beneficios de dos telas distintas en una sola cortina.  Confeccionadas en franjas horizontales e intercaladas de Black out y Sunscreen, permite controlar mucho mejor el ingreso de la luz exterior.'},
    {id:4, category:'Barral', title:'Dobles', price:500, pictureURL: dobles, descrip:'Las cortinas dobles no combinan dos telas en una, sino que son dos completamente independientes: una Black y una Sunscreen. Esto quiere decir que brindan la posibilidad de tener un control minucioso y preciso de la cantidad de luz exterior que se quiera filtrar.'}
]