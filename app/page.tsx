import FormComponent from '#/components/FormComponent';

export default function Page() {
	return (
		<div className="container flex flex-col items-center">
			<h1 className="mt-32 text-3xl font-bold">
				Using Ant-Desigh 5 with Next.js 13 with Tailwind CSS
			</h1>
			<div className="mt-10">
				<FormComponent />
			</div>
		</div>
	);
}