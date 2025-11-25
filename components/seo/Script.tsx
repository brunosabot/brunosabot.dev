interface ISeoScriptProps {
  data: Record<string, unknown>;
}

export default async function SeoScript({ data }: ISeoScriptProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
