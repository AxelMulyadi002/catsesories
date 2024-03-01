import React from 'react';
import Image from 'next/image';
import { data } from '@/components/data/data';

const Page = async ({ params }) => {
	const id = params.id;

	const api = data.filter((val) => val.id == id);

	return (
		<div>
			{api.map((val, index) => {
				return (
					<div className="mt-20" key={index}>
						<h1 className="text-center text-2xl font-bold mb-10 lg:text-6xl">
							{val.attributes.title}
						</h1>

						<div className="w-[90%] h-48 md:h-64 lg:h-[80vh] relative mb-10 m-auto">
							<Image
								src={val.attributes.image}
								fill
								alt="..."
								className="absolute object-cover"
							/>
						</div>
						<div className="text-lg text-justify flex flex-col gap-5  w-[90%] m-auto">
							{api.map((val) =>
								val.attributes.paragraph.map((el, index) => {
									return (
										<div key={index}>
											<p>{el.text}</p>
										</div>
									);
								})
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Page;
