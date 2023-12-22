import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import { Chip } from "@nextui-org/chip"
import { CARD_NAMES } from "@/types";
import { TREE_LINKS } from "@/types";

/* 
	Create a Card for our linktree component to live in
	Create a next/image
	Create some chips ( TypeScript, YouTuber, Programmer )
	Create a text description for the user
	Create cards for each user link

*/

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card shadow="lg">
				<CardBody>
					<div className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image 
								src="/Coopercodes.png"
								alt="brand-img"
								height={200}
								width={200}
								className="justify-center rounded-lg border-large"
							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold">Rick Codes</h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							{CARD_NAMES.map((link) => (
								<Chip
									variant="shadow"
									color="primary"
									size="sm"
								>
									{link.title}
								</Chip>
							))}
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-lg text-center font-semibold">
								This is a linktree I built to familiarize myself with NextUI and Next.js 13
							</p>
						</div>
						<div className="flex flex-col justify-center gap-4 pt-4">
							{TREE_LINKS.map((link) => (
								<a href={link.href} target="_blank">
									<Card className="w-full" isHoverable>
										<CardBody className="p-3">
											<h3 className="flex justify-center">{link.title}</h3>
										</CardBody>
									</Card>
								</a>
							))}
						</div>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}
