const articulos = [
    {
        id: 0,
        nombre: 'Pelota Wilson',
        marca: 'Wilson',
        precio: '$49',
        deporte: 'futbol',
        especificaciones: 'lore ipsum',
        foto: 'https://showsport.vtexassets.com/arquivos/ids/774996-800-auto?v=637792532793800000&width=800&height=auto&aspect=true'
    },
    {
        id: 1,
        nombre: 'Pelota Adidas',
        marca: 'adidas',
        precio: '$59',
        deporte: 'futbol',
        especificaciones: 'lore ipsum',
        foto: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3cb801e633fb4af59fa4ae620133b7bd_9366/Pelota_de_Entrenamiento_Al_Rihla_Blanco_H57798_01_standard.jpg'
    },
    {
        id: 2,
        nombre: 'Pelota Nike',
        marca: 'nike',
        precio: '$59',
        deporte: 'futbol',
        especificaciones: 'lore ipsum',
        foto: 'https://img.planetafobal.com/2023/06/premier-league-nike-flight-2023-2024-official-match-ball-aqz.webp'
    },
    {
        id: 3,
        nombre: 'Pelota Wilson',
        marca: 'wilson',
        precio: '$69',
        deporte: 'basket',
        especificaciones: 'lore ipsum',
        foto: 'https://http2.mlstatic.com/D_NQ_NP_669945-MLA48558776867_122021-O.webp'
    },
    {
        id: 4,
        nombre: 'Caja de pelotas Wilson',
        marca: 'wilson',
        precio: '$19',
        deporte: 'tenis',
        especificaciones: 'lore ipsum',
        foto: 'https://d28hi93gr697ol.cloudfront.net/c82a1a97-fbba-3d63/img/Producto/08452ea3-6b92-4005-6f5d-e46f3dc26efe/Tubo-2-6536f8fa7f8fc.jpg'
        
    },
    {
        id: 5,
        nombre: 'Guantes de arquero DRB',
        marca: 'DRB',
        precio: '$39',
        deporte: 'futbol',
        especificaciones: 'lore ipsum',
        foto: 'https://http2.mlstatic.com/D_NQ_NP_673128-MLA54950094661_042023-O.webp'
        
    },
    {
        id: 6,
        nombre: 'Guantes de arquero DRB',
        marca: 'DRB',
        precio: '$29',
        deporte: 'futbol',
        foto: 'https://www.linea4deportes.com.ar/4310-thickbox_default/guante-arquero-drb-feline-22.jpg'
        
    },
    {
        id: 7,
        nombre: 'Guantes de box Proyec',
        marca: 'proyec',
        precio: '$29',
        deporte: 'futbol',
        foto: 'https://allsports.com.ar/wp-content/uploads/2021/12/guante-proyec-pro-fight-Blanco.jpg'
        
    }
    ,
    {
        id: 8,
        nombre: 'Guantes de mma Proyec',
        marca: 'proyec',
        precio: '$29',
        deporte: 'mma',
        foto: 'https://http2.mlstatic.com/D_NQ_NP_616345-MLA51115951036_082022-O.webp'
        
    }
    ,
    {
        id: 9,
        nombre: 'Mancuerna 10kg',
        marca: 'G-FITNESS',
        precio: '$10',
        deporte: 'gim',
        foto: 'https://tienda.gfitness.com.ar/web/image/product.image/1596/image_1024/Mancuerna%20redonda%20engomada%2010kg%20con%20logo%20GFITNESS%20%28por%20unidad%29?unique=937d7cb'
        
    }
    ,
    {
        id: 10,
        nombre: 'Mancuerna 2kg',
        marca: 'G-FITNESS',
        precio: '$5',
        deporte: 'gim',
        foto: 'https://www.tienda.gfitness.com.ar/web/image/product.template/4195/image_1024?unique=4d0264e'
        
    }
    ,
    {
        id: 11,
        nombre: 'Raqueta',
        marca: 'Wilson',
        precio: '$25',
        deporte: 'Tenis',
        foto: 'https://www.puntosport.com.ar/10576-thickbox_default/raqueta-wilson-blade-feel-100-286-grs-aro-100-16x19-grip-3-wr054510u3.jpg'
        
    }
    ,
    {
        id: 12,
        nombre: 'Colchoneta ',
        marca: 'G-Fitness',
        precio: '$25',
        deporte: 'Tenis',
        foto: 'https://tienda.gfitness.com.ar/web/image/145821/image%20(1).jpg?access_token=56cca94f-9bb4-47d1-9f9a-3e82ac25928e'
    }
    ,
    {
        id: 13,
        nombre: 'Soga ',
        marca: 'Wilson',
        precio: '$19.99',
        deporte: 'Gim',
        foto: 'https://m.media-amazon.com/images/I/71h2h4vkGiL.jpg'
    }
    ,
    {
        id: 14,
        nombre: 'Soga ',
        marca: 'Wilson',
        precio: '$9.99',
        deporte: 'Gim',
        foto: 'https://mundodextivo.com/10334-thickbox_default/cuerda-wilson-para-saltar-con-mango-de-madera-cs0ma.jpg'
    }
    ,
    {
        id: 15,
        nombre: 'Cono tortuga ',
        marca: 'drb',
        precio: '$2',
        deporte: 'Gim',
        foto: 'https://borabikes.com.ar/62959-large_default/cono-tortuga-entrenamiento-flexible-irrompible-pvc-drb-x-10u.jpg'
    }
    ,
    {
        id: 16,
        nombre: 'Pelota Padel ',
        marca: 'Wilson',
        precio: '$9.99',
        deporte: 'Padel',
        foto: 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/yf2i2wyms80f9uimc1qoyu892c3s/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5'
    }
    ,
    {
        id: 17,
        nombre: 'Paleta ',
        marca: 'Adidas',
        precio: '$25',
        deporte: 'Padel',
        foto: 'https://http2.mlstatic.com/D_NQ_NP_959303-MLU72637070581_112023-O.webp'
    }
    ,
    {
        id: 18,
        nombre: 'Paleta ',
        marca: 'Wilson',
        precio: '$30',
        deporte: 'Padel',
        foto: 'https://dcdn.mitiendanube.com/stores/001/030/249/products/ws323_01-7f48257eec706a0cca16640308866634-1024-1024.jpg'
    }
    ,
    {
        id: 19,
        nombre: 'Paleta profesional ',
        marca: 'Pro-Spin',
        precio: '$15',
        deporte: 'Ping Pong',
        foto: 'https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFjSXZBLUs2U0wuX0FDX1NMMTUwMF8uanBn.jpg'
    }
    ,
    {
        id: 20,
        nombre: '12 Pelotas Ping Pong',
        marca: 'Pro-Spin',
        precio: '$5.99',
        deporte: 'Ping Pong',
        foto: 'https://http2.mlstatic.com/D_NQ_NP_691421-MLU70998011140_082023-O.webp'
    }
    ,
    {
        id: 21,
        nombre: 'Mancuerna 15 kg ',
        marca: 'G-Fitness',
        precio: '$15',
        deporte: 'Gim',
        foto: 'https://tienda.gfitness.com.ar/web/image/product.image/2028/image_1024/Mancuerna%20redonda%20engomada%2015kg%20con%20logo%20GFITNESS%20%28por%20unidad%29?unique=ea1cce5'
    },
    {
        id: 22,
        nombre: 'Pelota Ritmica ',
        marca: 'DRB',
        precio: '$9.99',
        deporte: 'Gim',
        foto: 'https://acdn.mitiendanube.com/stores/001/219/670/products/03107-011-81c9c87e677b7a347116206557687483-640-0.jpg'
    }
]

export default articulos