interface DocumentPageProps {
    params: Promise<{
        documentId: string;
    }>;
};
const DocumentIdPage = async ({ params }: DocumentPageProps) => {

    const {documentId} = await params;
    return (
        <main>
            <h1>Document ID: {documentId}</h1>
        </main>
    );
}

export default DocumentIdPage;