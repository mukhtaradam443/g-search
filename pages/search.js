import Header from "@/components/Header";
import Head from "next/head";
import Response from '../Response';
import { useRouter } from "next/router";
import { SearchCircleIcon } from "@heroicons/react/outline";
import SearchResult from "@/components/SearchResult";


function Search({results}) {
    const router = useRouter();
    console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
        </Head>
        {/* header */}
        <Header/>
        <SearchResult results={results}/>
    </div>
  )
};

export default Search;




export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || '0';
  
    const API_KEY = "AIzaSyDiK8h5ViI637C4Kw0GbfL5xvsH2utj2cY";
    const CONTEXT_KEY = "f7f56853cc58f40e7";
  
    // Fetch data from the Google Custom Search API
    const data = useDummyData ? Response :  await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());
  
    // After the server has rendered, pass the data to the client
    return {
      props: {
        results: data,
      },
    };
  }
  