export default async function action(props){
    let request = await fetch(process.env.URLROOTNODE+process.env.REGISTERRT, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome:props.nome,
            email:props.email,
            senha:props.senha,
            telefone:props.telefone,
            id_nivel:props.id_nivel
        })
    });
    let response = await request.json();
    console.log(response);
}