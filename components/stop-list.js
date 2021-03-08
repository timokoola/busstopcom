import { gql, useQuery } from "@apollo/client";
import StopInfo from "../components/stop-info";

const STOPS = gql`
  query Stops($name: String!) {
    stops(name: $name, maxResults: 30) {
      gtfsId
      name
      code
      patterns {
        name
        headsign
      }
    }
  }
`;

export default function StopList({ name }) {
  const { loading, error, data } = useQuery(STOPS, {
    variables: { name },
  });
  if (loading) return "Loading...";
  if (error) return `ERROR! ${error}`;

  return (
    <>
      {data?.stops?.map((item) => (
        <StopInfo key={item.gtfsId} stop={item} />
      ))}
    </>
  );
}
