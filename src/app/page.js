import { Categories } from '@/components/categories/Categories';
import { Featured } from '@/components/featured/Featured';
import { Pagination } from '@/components/pagination/Pagination';
import { ReadMore } from '@/components/readMore/ReadMore';
import { RecentPost } from '@/components/recentPost/RecentPost';
import { data } from '@/components/data/data';

export default async function Home() {
	return (
		<div>
			<Featured data={data} />
			<Categories />
			<RecentPost data={data} limit={2} />
			<ReadMore />
		</div>
	);
}
