import ClientPageWrapper from "@/app/(admin)/home-settings/ClientPageWrapper";


export default function HomeSettingsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ClientPageWrapper slug={params.slug} />;
}

