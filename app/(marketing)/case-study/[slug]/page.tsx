type CaseStudyDetailPageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  await params;
  return null;
}
