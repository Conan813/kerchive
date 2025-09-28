export default function RecipeDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>레시피 상세 페이지</h1>
      <p>레시피 ID: {params.id}</p>
    </div>
  );
}
