import Link from 'next/link'; 


const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" >
      click <Link href="/documents/123">
      <span className="text to-blue-500 underline " > here </span> 
      </Link> to go to sign in page
      
    </div>
  );
}

export default Home;
