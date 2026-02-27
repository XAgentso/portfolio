export interface TestimonialType {
	content: string;
	author: string;
	position: string;
	imageSrc: string;
}

export const testimonials: TestimonialType[] = [
	{
		content:
			"Siddharth has an exceptional grasp of machine learning fundamentals. His tumor detection project demonstrated both technical depth and genuine curiosity — exactly the kind of thinking we want to see in future researchers.",
		author: "Dr. Anjali Mehta",
		position: "Professor, Computer Science",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Working with Siddharth on our college hackathon project was seamless. He writes clean, well-thought-out code and has a talent for breaking down complex problems into elegant solutions.",
		author: "Arjun Desai",
		position: "Tech Lead, DevClub",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Siddharth's passion for cybersecurity really shows. During our CTF sessions he consistently finds non-obvious solutions and always takes time to explain his thinking to the team.",
		author: "Priya Nair",
		position: "CTF Team Captain",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"I was genuinely impressed by his DataPulse pipeline — processing real-time streams at that scale as a self-started project is no small feat. This student thinks like an engineer.",
		author: "Rahul Sharma",
		position: "Senior Engineer, Infosys",
		imageSrc: "/placeholder-2.jpg",
	},
	{
		content:
			"Siddharth combines creativity with rigour in a way that's rare for someone at the start of their career. His AI study companion shows he understands both the UX and the ML sides of the problem.",
		author: "Neha Kulkarni",
		position: "Mentor, GSSoC",
		imageSrc: "/placeholder-2.jpg",
	},
];
