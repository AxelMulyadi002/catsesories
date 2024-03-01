'use client';

import { RecentPost } from '@/components/recentPost/RecentPost';
import React from 'react';
import { useEffect } from 'react';
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
				<h1>Book Blog</h1>
			</div>

			<RecentPost
				data={data.filter((el) => el.attributes.field === 'book')}
				limit={data.length}
			/>
		</div>
	);
};

export default Page;
