import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const RecentPost = ({ data, limit }) => {
	console.log(data, limit);
	const api = data.slice(0, limit);

	return (
		<div>
			<h1 className="text-3xl font-bold mt-16 mb-10">Recent Posts</h1>
			{api
				.map((val, index) => {
					return (
						<div className="lg:flex lg:items-center lg:gap-3" key={index}>
							<div className="w-2/6 h-80 relative hidden lg:block lg:mb-10">
								<Image
									src={val.attributes.image}
									alt="..."
									fill
									className="absolute object-cover"
								/>
							</div>
							<div className="flex flex-col gap-3 lg:flex-1 ">
								<div>
									<span>{val.attributes.date} - </span>
									<span className="text-red-600">
										{val.attributes.category}
									</span>
								</div>
								<h1 className="text-3xl lg:text-4xl font-semibold">
									{val.attributes.title}
								</h1>
								<p className="text-sm lg:text-md dark:text-slate-300">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Fugiat corrupti quia inventore deserunt optio architecto
									itaque vitae voluptatem eaque omnis aliquam consectetur, at
									doloremque. Id beatae illo provident assumenda ratione.
								</p>

								<Link href={`/post/${val.id}`}>
									<div className="py-4 mb-10 rounded-lg bg-black text-white md:text-black dark:text-black text-center dark:bg-white md:text-left md:dark:text-white md:dark:bg-inherit md:bg-transparent md:underline md:decoration-red-600 md:w-28 cursor-pointer lg:text-lg">
										Read More
									</div>
								</Link>
							</div>
						</div>
					);
				})
				.sort((a, b) => b.key - a.key)}

			{/* {api.data?.map((val, index) => {
				return (
					<div className="lg:flex lg:items-center lg:gap-3" key={index}>
						<div className="w-2/6 h-80 relative hidden lg:block lg:mb-10">
							<Image
								src={`http://localhost:1337${val.attributes.image.data.attributes.formats.thumbnail.url}`}
								alt="..."
								fill
								className="absolute object-cover"
							/>
						</div>
						<div className="flex flex-col gap-3 lg:flex-1 ">
							<div>
								<span>{val.attributes.date} - </span>
								<span className="text-red-600">{val.attributes.category}</span>
							</div>
							<h1 className="text-3xl lg:text-4xl font-semibold">
								{val.attributes.title}
							</h1>
							<p className="text-sm lg:text-md dark:text-slate-300">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
								corrupti quia inventore deserunt optio architecto itaque vitae
								voluptatem eaque omnis aliquam consectetur, at doloremque. Id
								beatae illo provident assumenda ratione.
							</p>

							<Link href={`/post/${val.id}`}>
								<div className="py-4 mb-10 rounded-lg bg-black text-white md:text-black dark:text-black text-center dark:bg-white md:text-left md:dark:text-white md:dark:bg-inherit md:bg-transparent md:underline md:decoration-red-600 md:w-28 cursor-pointer lg:text-lg">
									Read More
								</div>
							</Link>
						</div>
					</div>
				);
			})} */}
		</div>
	);
};
