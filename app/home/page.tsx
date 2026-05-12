import Navbar from "@/components/navbar";
import GroceryTable from "./demo";
import { getAllEntries } from "@/components/reciepts";


export default async function Home() {
  var wow = await getAllEntries();

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-2 gap-4 py-12 pb-9">
        <GroceryTable data={JSON.parse(JSON.stringify(wow))} />
    </div>
    </>
  )
}
