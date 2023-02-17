import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../styles/utils.module.css';
import { clsx } from 'clsx';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link'



export default function Home({data}) {
  return (
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <a href="/first-post">Ir a First post</a>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>

      <h1>Lista de blog</h1>
      { data.map(({id, title, body}) =>(
            <div key={id}>
              <h3>
                <Link href={`/posts/${id}`}>
                  {id} - {title}
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          ))
      }
    </section>

      
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, position,title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {position}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

//solo se ejecuta en el servidor se puede llamar a BDD
export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //const res = await fetch('https://sodignature.com/APIConsultasSodig/api/ActividadEconomica')
    const data = await res.json()
    return{
      props:{
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
}


// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <a href="/first-post">Ir a First post</a>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>

       
//       </section>
//     </Layout>
//   );
// }

