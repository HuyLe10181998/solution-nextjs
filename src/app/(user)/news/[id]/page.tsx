import { getNewById } from "@/actions/news.action";

export default async function NewsDetailPage({params}: {params: {id: string}}) {
    const {id} = params;
    if(!id) return null;
    const post = await getNewById(Number(id));
    console.log('post', post);
    return <div>NewsDetailPage</div>;
}