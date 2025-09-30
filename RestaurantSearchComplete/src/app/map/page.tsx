import NaverMap from "@/components/NaverMap";

export default function Map({ params }: { params: { id: string } }) {
  return (
    <div>
      <NaverMap />
    </div>
  );
}
