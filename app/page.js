import { Inter } from "@next/font/google";

import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import styles from "./page.module.css";



const inter = Inter( { subsets : [ "latin" ] } );


export async function getStaticProps() {
    const posts = allPosts.sort( ( a, b ) => {
        return compareDesc( new Date( a.date ), new Date( b.date ) );
    } );
    return {
        props : { posts }
    };
    
    function PostCard( post ) {
        return (
            
            
            <div className="post-card">
                
                <time dateTime={ post.date } className="time">
                    { format( parseISO( post.date ), "LLLL d, yyyy" ) }
                    <h1>{ post.title }</h1>
                
                </time>
            
            
            </div>
        
        );
        
    }
}


export default function Home( posts ) {
    return ( <main className={ styles.main }>
        
        - initial commit
        
        initial dependencies loaded
        
        npm install --save styled-components // https://styled-components.com/docs/basics#installation
        npm install --save clsx // https://github.com/lukeed/clsx
        npm install date-fns --save // https://date-fns.org/docs/Getting-Started
        npm install dotenv --save // https://www.npmjs.com/package/dotenv
        npm install --save normalize.css // https://necolas.github.io/normalize.css/
        npm install --save file-loader // https://github.com/webpack-contrib/file-loader
        
        
        npm install next-contentlayer --save // https://www.contentlayer.dev/docs/environments/nextjs
    
    
    </main> );
}
