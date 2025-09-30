export default function RecipeDetail({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>상세 레스토랑 페이지{params.id}</h1>
    </main>
  );
}
