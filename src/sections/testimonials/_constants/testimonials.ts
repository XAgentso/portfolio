export interface InternshipItem {
	company: string;
	division: string;
	designation: string;
	duration: string;
	workProfile: string;
}

export const internships: InternshipItem[] = [
	{
		company: "1STOP.AI",
		division: "Web Development (Front-End)",
		designation: "Intern",
		duration: "October 2023 – November 2023",
		workProfile:
			"Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
	},
	{
		company: "Bharat Intern",
		division: "Data Science",
		designation: "Intern",
		duration: "January 2024 – March 2024",
		workProfile:
			"Performed data cleaning, exploratory analysis, visualization, and basic predictive modeling using Python.",
	},
	{
		company: "Cognorise Infotech",
		division: "Python Development",
		designation: "Technical Intern",
		duration: "January 2024 – February 2024 (30 Days)",
		workProfile:
			"Designed and optimized Python applications using OOP principles and automation techniques.",
	},
	{
		company: "Prodigy Infotech",
		division: "Machine Learning",
		designation: "Intern",
		duration: "January 2024 (30 Days)",
		workProfile:
			"Built, trained, and evaluated machine learning models on structured datasets.",
	},
	{
		company: "Meriskill",
		division: "Data Analysis",
		designation: "Data Analyst",
		duration: "January 2024 – February 2024",
		workProfile:
			"Analysed data, created dashboards, and generated insights through reports and visualizations.",
	},
];
