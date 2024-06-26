interface ISeoScriptProps {
  data: Record<string, any>;
}

export default async function SeoScript({ data }: ISeoScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
