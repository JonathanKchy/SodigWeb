import Layout from "../../../components/layout";

export default function id({data}){
    return(
        <Layout>
            <h1>hola si</h1>
            
            <h1>{data.id} - {data.title}</h1>
        </Layout>
        
    );
}

//saco el id de la solicitud
export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id}) => ({params: {id: `${id}`}}))
        
        return{
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}

//solo se ejecuta en el servidor se puede llamar a BDD
export async function getStaticProps({params}) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/" +params.id)
      //const res = await fetch('https://sodignature.com/APIConsultasSodig/api/ActividadEconomica')
      const data = await res.json()
      return{
        props:{
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }