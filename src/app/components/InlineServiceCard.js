export default function InlineServiceCard({ title }) {
  return (
    <div className="min-w-[250px] h-[180px] playgroud2 text-center flex items-center justify-center p-10">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}