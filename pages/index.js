// import Head from 'next/head';

// import Nav from '../components/Nav';
// import PostCard from '../components/PostCard';
// import styles from '../styles/Home.module.css';

// export default function Home({ posts }) {
//     return (
//         <div>
//             <main>
//                 <div className={styles.container}>
//                     {posts.length === 0 ? (
//                         <h2>No added posts</h2>
//                     ) : (
//                         <ul>
//                             {posts.map((post, i) => (
//                                 <PostCard post={post} key={i} />
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }

// export async function getServerSideProps(ctx) {
//     // get the current environment
//     let dev = process.env.NODE_ENV !== 'production';
//     let { DEV_URL, PROD_URL } = process.env;

//     // request posts from api
//     let response = await fetch('/api/post');
//     // extract the data
//     let data = await response.json();

//     return {
//         props: {
//             posts: data['message'],
//         },
//     };
// }
import StartingPageContent from '../components/starting-page/starting-page';

function HomePage() {
  return <StartingPageContent />;
}

export default HomePage;