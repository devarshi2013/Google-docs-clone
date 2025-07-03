import Link from 'next/link';


const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" >
      click <link href="/documents/123"><span className="blue underline " > here </span> </link> to go to sign in page
      <p>Hello, world!</p>
      click <Link href="/documents/123">
      <span className="text to-blue-500 underline " > here </span> 
      </Link> to go to sign in page
      
    </div>
  );
  
}