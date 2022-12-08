import Detail from "../modules/property-details";
import {Banner} from "../components/banner"

export default function PropertyDetails({ data }) {
  return (
    <>
      <Banner>Property Details</Banner>
      <Detail account={data.account} />
    </>
  );
}

export async function getServerSideProps() {
    const server = 'http://localhost:3333'
    const res = await fetch(`${server}/api/account`)
    const data = await res.json()

    return { props: { data } }
}
