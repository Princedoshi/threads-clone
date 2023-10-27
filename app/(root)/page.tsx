import { fetchPosts } from "@/lib/actions/thread.actions";
import { UserButton } from "@clerk/nextjs";
 
export default async function Home() {

  const result = await fetchPosts(1,3);

  console.log(result);



  return (
    <>
      <h1 className="head-text text-left">Homies</h1>
      
    </>
  )
}