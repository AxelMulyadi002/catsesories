'use client';

import { Pagination } from '@/components/pagination/Pagination';
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
		<div>
			<RecentPost data={data} limit={data.length} />
		</div>
	);
};

export default Page;
