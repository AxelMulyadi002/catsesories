'use client';

import { Pagination } from '@/components/pagination/Pagination';
import { RecentPost } from '@/components/recentPost/RecentPost';
import { useEffect } from 'react';
import React from 'react';
import { data } from '@/components/data/data';

const Page = () => {
	const scrollTop = () => {
		scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		scrollTop();
	}, []);

	return (
		<div className="mt-10">
			<div className="border p-2 text-center text-2xl bg-[#ff7f50] font-extrabold">
				<h1 className="daily">Daily Blog</h1>
			</div>

			<RecentPost
				data={data.filter((el) => el.attributes.field === 'daily')}
				limit={data.length}
			/>
		</div>
	);
};

export default Page;
