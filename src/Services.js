import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Services.css";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";



class ServicesComponent extends Component {

	constructor() {
		super();
		this.state = {
			open: false,
			modalContent: {
				title: "",
				description: "",
				picture: ""
			},
			currentlyViewing: "Surveying",
			engineeringView: "Public",
			surveyingServices: {
				intro: "Accurate and timely field data is critical for good designs and property transactions.  MEI has been providing surveying services since our inception in 1973.  With our staff of Registered Land Surveyors, field and office crews, we have completed thousands of surveys that are accurate and equally important – on time.",
				services: [
					{
						title: "Boundary Surveys (PLATS)",
						description: "A Boundary Survey will map the property and identify the location of all property lines.  MEI’s experienced survey team will complete field work that will identity easements (such as water, sewer, power, and others on the property), as well as locate any encroachments to the property (example; fences or neighboring driveways that are past the property line).  From this data, a Plat of Survey is compiled to document the collected information, it is reviewed and signed by a Registered Land Surveyor and available for use in land transactions or obtaining building permits.",
						picture: "/pictures/projectPictures/Web_1_A.jpg"
					},
					{
						title: "ALTA Surveys",
						description: "Lenders and title companies may require a more comprehensive survey for property transaction, especially for commercial developments.   ALTA/NSPS Surveys are a detailed record of the property that indicates all existing property improvements, utilities, major observations, and other information.  The American Land Title Association (ALTA) and the National Society of Professional Surveyors (NSPS) has set standards that are more comprehensive than those of a typical Boundary Survey.  Lenders and title companies may require an ALTA/NSPS survey for an individual property (they are typically required for all commercial properties).  MEI has completed numerous ALTA/NSPS Surveys that comply with lender, title company and developer requirements.",
						picture: "/pictures/projectPictures/Web_1_B.jpg"
					},
					{
						title: "Topographic Surveys",
						description: "Accurate Topographic Surveys are necessary to complete a site plan for the parcel and for the design of infrastructure servicing the land.  A Topographic Survey obtains data on the current surface of the land (elevations), any naturally occurring objects, (trees, vegetation, etc.) as well as any non-natural enhancements (buildings, driveways, fences, etc).  This data is compiled into a survey that engineers will utilize for designing storm sewer systems, sanitary sewer systems, building pads and roadways.  MEI can complete topographic surveys utilizing a variety of methods including traditional total stations, GPS equipment and even drones (if requested and feasible for a given parcel). ",
						picture: "/pictures/projectPictures/Web_1_C.jpg"
					},
					{
						title: "Tree Surveys",
						description: "On various projects, the exact number and size of trees is a critical component of the project or the approval process.  MEI coordinates the efforts of Arborists and Landscapers to identify the size and location of the trees on a property.  These surveys can provide detailed additional information such as the species of the tree, tree measurements, age, life expectancy and overall health of the tree.",
						picture: "/pictures/projectPictures/Web_1_D.jpg"
					},
					{
						title: "ROW Delineations",
						description: "Knowing where the public Right-of-Way is for any construction project is highly important to the permitting process.  MEI will locate and mark the ROW to ensure no encroachments are made during your planned improvements.",
						picture: "/pictures/projectPictures/Web_1_E.jpg"
					},
					{
						title: "Floodplain Delineations",
						description: "Construction activities are greatly regulated in floodplains and floodways.  Morris will complete the necessary field surveying and assist the developers in pursuing Letters of Map Revisions (LOMR & CLOMR).",
						picture: "/pictures/projectPictures/Web_1_F.jpg"
					},
					{
						title: "FEMA Flood Elevation Certificates",
						description: "Rising insurance costs are at the forefront of every property owner’s minds and budgets.  With the ever-increasing cost of flood insurance, more and more insurance carriers are requiring FEMA Flood Elevation Certificates to prove a business or residence is outside the flood area.  MEI’s team of surveyors and Professional Engineers will gather necessary field information for the property that our Engineers will use to complete the certificate.",
						picture: "/pictures/projectPictures/Web_1_G.gif"
					},
					{
						title: "Construction Layout",
						description: "Two components make a company good at providing construction layout; reliability and responsiveness.  The owner and contractor need to be able to rely on the accuracy of the staking and the timeliness of the surveyor to ensure work continues on schedule.  When the unexpected happens in the field, such as high winds that knock down stakes, the response time of the surveyor is key to keeping the project on time.  MEI prides ourselves on our dependability and the precision of our work.",
						picture: "/pictures/projectPictures/Web_1_H.jpg"
					},
					{
						title: "Expert Testimony",
						description: "MEI’s team of experienced professionals on staff have over 150 years of combined Professional Land Surveying experience and over 115 years of combined Professional Engineering experience.  Utilizing this experience, MEI can provide testimony, exhibits, and certified maps for hearings, presentations or meetings.  We have provided materials and testimonies that have been used for zoning, land use, property disputes, traffic studies and impacts, economic impact areas, flooding and floodplains, wetland delineations and many others.",
						picture: "/pictures/projectPictures/Web_1_I.jpg"
					}
				]
			},
			engineeringPSServices: {
				intro: "paragraph",
				services: [
					{
						title: "Project Funding",
						description: "Funding is the number one factor in determining if a project proceeds.  MEI assists government entities in obtaining federal funding and grants for a variety of projects.  We have helped obtain STU, STP, TBP, DCEO and CMAP, among other types of funding, for roadway, drainage, pedestrian and flooding projects.  We work with individual Mayor’s Conferences to initiate, develop and secure funding.  In many cases, we acquire sufficient funding to the local entity is required to contribute only 20% of the actual project cost, but in some cases, the project are 100% funded through multiple grants.",
						picture: "/pictures/projectPictures/Web_2a_A.jpg"
					},
					{
						title: "Program and Budget Development",
						description: "Poorly developed budgets are as detrimental as poorly engineered plans.  MEI helps determine actual project costs and assists in developing accurate budgets to ensure adequate funding is available to achieve the project goals.  Utilizing our engineering capabilities, construction experience and knowledge of current market conditions, we determine an accurate scope of work and prepare reasonable estimates.  We also forecast future expenses that are useful for long-term budget planning and life cycle costing.",
						picture: "/pictures/projectPictures/Web_2a_B.jpg"
					},
					{
						title: "Roadway Design",
						description: "The average person never really thinks about the design aspects of the roadways they utilize daily.  Most do not realize the roadways are a key element for the passageway of all the infrastructure demanded by modern society – water & sewer, electrical, gas, etc. With safety as the first priority, MEI will design your roadways to both meet traffic requirements and meet infrastructure requirements, while adhering to all applicable local, state and national standards.",
						picture: "/pictures/projectPictures/Web_2a_C.jpg"
					},
					{
						title: "Bridge Design",
						description: "Whether your project demands a new bridge or the rehabilitation of an existing bridge, MEI will assemble a team of structural, geotechnical and testing engineers.  We will lead this team from start to finish; from the permitting approval process of all governing agencies through construction completion and final documentation.",
						picture: "/pictures/projectPictures/Web_2a_D.jpg"
					},
					{
						title: "Traffic Studies",
						description: "Understanding the traffic impacts for a road or bridge is essential to an effective design.  MEI will coordinate the collection of traffic data and complete an analyzation process to ensure safety concerns, structural integrity, and motorist convenience issues are satisfactorily addressed in the final design.",
						picture: "/pictures/projectPictures/Web_2a_E.jpg"
					},
					{
						title: "Traffic Control",
						description: "Keeping motorists and pedestrians safe in a project zone is priority number one for all projects.  MEI will coordinate traffic control to ensure the safety of the general public, project crews, and emergency response teams.",
						picture: "/pictures/projectPictures/Web_2a_Fx.jpg"
					},
					{
						title: "Pedestrian and Bike Paths",
						description: "Pedestrian and Bike Paths have become sophisticated infrastructure elements that address both safety and ecological impacts.  How these paths impact the surroundings is an important aspect of the design.  MEI will help design and coordinate the construction of the paths; including assisting in finding funding through various grant opportunities.",
						picture: "/pictures/projectPictures/Web_2a_G.jpg"
					},
					{
						title: "Streetscape ",
						description: "Streetscapes will be the first thing will be noticed about your project.  From city streets to private patios or public parks, the design of urban gathering places has evolved tremendously.  MEI will coordinate the landscape architecture, drainage, lighting, safety and functionality of your project to ensure accurate completion.",
						picture: "/pictures/projectPictures/Web_2a_H.jpg"
					},
					{
						title: "Traffic Signals",
						description: "Traffic signal technology has evolved dramatically over the years.  An effective signal program will address changing traffic programs, emergency vehicle passage, and motorist and pedestrian safety.  MEI will help to establish efficient, cost-effective and safe signaling for your roadways.",
						picture: "/pictures/projectPictures/Web_2a_I.jpg"
					},
					{
						title: "Street Lighting",
						description: "Street lighting has become an aesthetically pleasing infrastructure element that enhances the safety of your streetscape.  With thousands of design options, MEI will work with you to coordinate an efficient, cost-effective, and safe lighting system that will bring your roadway to the next level.",
						picture: "/pictures/projectPictures/Web_2a_J.jpg"
					},
					{
						title: "Salt Storage Buildings",
						description: "Having a good supply of salt is essential for municipalities in the upper Midwest.  Proper storage is imperative in reducing wasted material, thereby reducing costs.  MEI can help design your storage site and assist in securing permits for construction.",
						picture: "/pictures/projectPictures/Web_2a_M.jpg"
					},
					{
						title: "Water Services",
						description: "Water is an essential part of our everyday lives and is necessary for basic human survival.  An effective water system design is crucial to any project.  From stormwater to wastewater, MEI has been completing analysis and design for over 40 years.  We recognize the need for a balance between project goals and governing body regulations all while being conscientious of all environmental concerns.  MEI will design a system hat will attain the goals of your project while being efficient, environmentally responsible, and cost-effective.",
						picture: "/pictures/projectPictures/Web_2a_K.jpg"
					}
				]
			},
			engineeringResServices: {
				intro: "paragraph",
				services: [
					{
						title: "Land Planning",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_A.jpg"
					},
					{
						title: "Due Diligence",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_B.jpg"
					},
					{
						title: "Feasibility Studies",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_C.jpg"
					},
					{
						title: "Proforma Development",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_D.jpg"
					},
					{
						title: "Earthwork Design and Analysis",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_E.jpg"
					},
					{
						title: "Roadway and Parking Lot Design",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_F.jpg"
					},
					{
						title: "Water System Design",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_G.jpg"
					},
					{
						title: "Sanitary Sewer Design",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_H.jpg"
					},
					{
						title: "Stormwater Analysis and Design",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_I_x.jpg"
					},
					{
						title: "Environmental Impacts",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_J.jpg"
					},
					{
						title: "Energy Efficiency",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_K.jpg"
					},
					{
						title: "Street Lighting",
						description: "this is the description",
						picture: "/pictures/projectPictures/Web_2b_L.jpg"
					}
				]
			},
			engineeringCIServices: {
				intro: "Commercial and Industrial projects typically involve an iterative process where the design requirements must be altered to meet the budget, regulation and feasibility requirements.  Often a Client wishes to complete a project but does not know if it is feasible.  Before expending a tremendous amount of effort, concept plans and feasibility studies are prepared, budgets are developed and proformas are analyzed.  Once the project meets the Owner/Developers and Governing agencies requirements, a decision may be made to proceed. MEI can help commercial and industrial clients through the process and guide them all the way through completion.",
				services: [
					{
						title: "Land Planning",
						description: "MEI will prepare preliminary land plans (or concept plans) to verify that a site for consideration can meet the Owners/Developers requirements or to define the scope for an industrial project.  These concept plans typically encompass the Developers requirements (building size, parking spaces, etc.) as well as the governing agencies requirements (zoning, special use, site limitations, easements, etc.).  If the proposed site appears to meet all the necessary criteria, this concept plan will be utilized for preliminary meetings with the Governing Agencies, to develop budgets and even for marketing purposes on behalf of the Developer.",
						picture: "/pictures/projectPictures/Web_2c_A.jpg"
					},
					{
						title: "Due Diligence",
						description: "To help determine if projects should proceed from concept to execution, the project team should complete a comprehensive due diligence process.  MEI can conduct feasibility studies to evaluate the availability of external resources (water, power, etc.), limitations of local zoning requirements and costs for variables such as off-site water supply, sewage, road improvements, land encumbrances and other site-specific issues that may affect the project budget and acceptance from the local governing body.",
						picture: "/pictures/projectPictures/Web_2c_B.jpg"
					},
					{
						title: "Feasibility Studies",
						description: "Many projects never get off the ground because the local governing body will not allow the developer to implement their desired plan.  Usually, there are concessions that must be made on both sides.  MEI can assist the developer through the entitlement process.  We attend hearings, answer questions, discern the obstacles for success and propose solutions. ",
						picture: "/pictures/projectPictures/Web_2c_C.jpg"
					},
					{
						title: "Proforma Development",
						description: "A proforma is a financial projection forecasting financial outcomes for a set time period.  MEI can assist the Developer in preparing a proforma for their decision-making process as well as for sharing with any financing institutions.  MEI will analyze all of the project costs including land (land costs, broker fees, real estate taxes, etc.), soft costs (engineering, architecture, other consultants, etc.), development costs (fees, recapture, etc.) construction costs and other costs (financing, operations, etc.).  Together with the Developer we will input projected revenues (rent, sales, etc.) and compare them against the cost.  This will allow the developer to project a Return on Investment as well as see how long it will take to pay off the project and make it economically feasible.",
						picture: "/pictures/projectPictures/Web_2c_D.jpg"
					},
					{
						title: "Earthwork Design and Analysis",
						description: "On new projects, earthwork can be a substantial cost.  Setting buildings and roadways to low, can yield excess dirt that has to be trucked off site.  Setting improvements too high, can mean a shortage of dirt which leads to import costs.  Many times, the engineering requirements dictate the elevations that are required to allow the site to properly function.   MEI will typically complete an iterative process where grades are established to function properly.  Then we analyze the earthwork quantities and make revisions to try to bring the site into balance.  There are many variables that need to be accounted for, including; topsoil depth, suitability of soils, maintaining drainage, structural usage, spoils from other activities and more.  MEI uses its technical expertise along with years of construction experience to design a program that is the most efficient for the project.",
						picture: "/pictures/projectPictures/Web_2c_E.jpg"
					},
					{
						title: "Roadway and Parking Lot Design",
						description: "For an effective site, the routing and suitability of pavements is important.  Trucks have a need for much stronger pavement than automobiles.  Determining where the traffic will be routed, and the extent of the traffic will yield different pavement designs.  MEI factors in all these variables, (along with parking requirements, needs for loading and distribution areas, requirements fire lanes and fire truck access, and more), to develop a pavement design.  MEI can also design alternative pavements (in lieu of asphalt or concrete), so that the site becomes environmentally friendly and helps reduce stormwater discharge.",
						picture: "/pictures/projectPictures/Web_2c_F.jpg"
					},
					{
						title: "Water System Design",
						description: "Water requirements for commercial and industrial projects can be far greater than residential projects.  In the majority of cases, all buildings require sprinkler systems.  In many cases, additional water is need for other types of operations.  This may also require higher water pressures than is available through the public water lines.  In some cases, public water lines are not available and off-site water work is required, or other alternatives must be explored.  MEI will utilize its commercial and industrial expertise to design an efficient water system that meets the clients needs.",
						picture: "/pictures/projectPictures/Web_2c_G.jpg"
					},
					{
						title: "Sanitary Sewer Design",
						description: "Sanitary sewer needs may increase on commercial and industrial projects.  MEI can design on-site sewer systems as well as off-site systems if they are required.  Working with architects, we can address the various disposal needs a specific project may demand.  We can incorporate lift stations as well if there is inadequate grade to allow for gravity sewers to function properly.",
						picture: "/pictures/projectPictures/Web_2c_H.jpg"
					},
					{
						title: "Stormwater Analysis and Design",
						description: "Stormwater has become a major expense on commercial and industrial projects.  Not only does the developer lose valuable real estate to detention and retention ponds, the list of required BMP’s (Best Management Practices) has added cost to projects.  MEI will design the stormwater system to meet the governing agency requirements, while still maximizing efficiency for the developer.  MEI can also address other major stormwater issues such as flood plains, floodways, permeable pavements, below ground storage and working within drainage easements.",
						picture: "/pictures/projectPictures/Web_2c_I.jpg"
					},
					{
						title: "Environmental Impacts",
						description: "As the trend for providing “green” infrastructure continues to grow, the methods by which we construct and evaluate sitework is constantly evolving.   MEI can assist the developer in pursuing LEED certification, implementing best management practices (BMP’s) to reduce pollutants from stormwater, locally sourcing materials,  reducing “heat islands,” and other strategies to help reduce negative impacts to the environment. ",
						picture: "/pictures/projectPictures/Web_2c_J.jpg"
					},
					{
						title: "Energy Efficiency",
						description: "While MEI currently does not design any alternative energy resources, we work together with the Energy Consultants to implement their design.  Be it solar, wind or geothermal, they each have infrastructure needs for implementation.  MEI will work with these designers to effectively incorporate these elements into the design.  We also work with several electrical engineers to help implement energy reducing strategies for site lighting, signalization and power for infrastructure equipment (lift stations, etc.). ",
						picture: "/pictures/projectPictures/Web_2c_K.jpg"
					},
					{
						title: "Design Build Partnerships",
						description: "MEI is part of a design build team called ‘Industrial Design Build Solutions.’  This is a collaboration between Engineers, Contractors and Construction Managers to provide infrastructure solutions for industrial projects.  We specialize in drainage and secondary containment.",
						picture: "/pictures/projectPictures/Web_2c_L.jpg"
					}
				]
			},
			constructionServices: {
				intro: "The execution of good design occurs in the construction phase of a project.  Verifying the design is properly executed and budgets and schedules are not exceeded is a critical part of project success. MEI’s team of Resident Engineers, Construction Engineers and technicians draw on their many years of experience to ensure this execution meets the project objectives.",
				services: [
					{
						title: "Resident Engineering",
						description: "Public projects have an established protocol for inspections, administration and ultimately, pay out for the completed work.  MEI’s staff of Resident Engineers is prequalified with IDOT to follow this protocol and can draw on experience for hundreds of past projects to ensure the project is properly executed.",
						picture: "/pictures/projectPictures/Web_3_A.jpg"
					},
					{
						title: "Construction Engineering",
						description: "Private projects carry an equal amount of concern for quality, budget and schedule.  Whether it is land development or facility construction, MEI’s team of engineers will help develop the bidding packages, procure various subcontractors, provide necessary inspections and project administration as required to meet the owner’s objectives.",
						picture: "/pictures/projectPictures/Web_3_B.jpg"
					},
					{
						title: "Quantitiy Take-Offs and Cost Estimating",
						description: "Accurate budgets are critical for project success.  MEI can complete quantity take-offs to help identify the complete scope of work so that all of the necessary items are addressed by contractors and subcontractors.  MEI can draw on its existing cost data base from previous projects to help prepare accurate cost estimates.  This will help owners develop accurate project budgets and ensure that 100% of their projects are funded to completion.",
						picture: "/pictures/projectPictures/Web_3_B.jpg"
					}
				]
			},
			municipalServices: {
				intro: "Municipalities (Cities, Villages, Townships and County Governments) have a unique approach for conducting their business.  Often they have strict guidelines for budgets, project design and execution that are unique to the public sector. MEI draws on its experience in the public sector (as the engineer for multiple Cities, Villages and Townships) to help municipalities achieve their project goals. MEI’s involvement with a municipality may be a one time only arrangement (single project) or an ongoing relationship (developing and executing long term programs).",
				services: [
					{
						title: "GRANT Funding",
						description: "Funding is the number one factor in determining if a project proceeds.  MEI assists government entities in obtaining federal funding and grants for a variety of projects.  We have helped obtain STU, STP, TBP, DCEO, and CMAP, among other types of funding for roadway, drainage, pedestrian and flooding projects.  We work with individual Mayor's Conferences to initiate, develop and secure funding.  In most cases, we acquire sufficient funding, so the local entity is required to contribute only 20% of the actual project cost, but in some cases, the projects are 100% funded through multiple grants.",
						picture: "/pictures/projectPictures/Web_2a_A.jpg"
					},
					{
						title: "Plan Reviews",
						description: "If a municipality or other government agency is limited in their capability to review and approve plans, MEI can help.  MEI can review site plans for individual residences that are submitted by Homeowners or contractors applying for permits.  We can also review comprehensive site development plans for residential, commercial and industrial projects.  We typically review everything outside of the building to verify compliance with codes and the appropriate engineering standards. Our reviews typically involve the review of proposed water, sewer and stormwater systems, roadways and paving, earthwork, erosion control and best management practices.",
						picture: "/pictures/projectPictures/Web_6_B.jpg"
					},
					{
						title: "Inspections",
						description: "MEI can assist municipalities and other government agencies with inspections of projects that are currently under construction.  MEI  will conduct a field visit to verify the work is in compliance with the approved plans and permit requirements.  We can work through the agency, or directly with the contractors to make sure that all deficiencies are corrected before the final approval is issued. We typically review everything outside of the building including water, sewer and stormwater systems, roadways and paving, earthwork, erosion control and best management practices.",
						picture: "/pictures/projectPictures/Web_6_C.jpg"
					},
					{
						title: "Permitting",
						description: "Even when municipalities are completing their own projects, often times they are required to obtain permits from other government agencies.   Entities such as the County, IDOT, MWRD, IEPA and others may require permits for construction and execution of projects.  MEI can assist with the applications and procurement of these permits.  While we cannot guarantee that we can expedite an individual permit, we have developed strong working relationships with these regulatory agencies and we believe our involvement in the process helps to make it more efficient.",
						picture: "/pictures/projectPictures/Web_6_D.jpg"
					},
					{
						title: "Water System Design and Management",
						description: "Most municipalities have two goals with respect to their water systems.  First, they want to construct new systems or improve existing systems at the best value possible and second, they want to efficiently manage their current systems.  MEI can help in both regards.  ",
						picture: "/pictures/projectPictures/Web_6_E.jpg"
					},
					{
						title: "Sanitary Sewer Design and Management",
						description: "MEI can assist municipalities in designing new sanitary sewer systems or make improvements to existing systems.  We can coordinate the analytical effort (testing and evaluation to determine what the issues are) and then develop a program to make necessary repairs or improvements.   This work typically involves installing new or making improvements to mainline sewers, manholes and/or lift stations.",
						picture: "/pictures/projectPictures/Web_6_F.jpg"
					},
					{
						title: "Stormwater Design and Management",
						description: "MEI can assist in managing the stormwater issues that affect every municipality.  We can analyze and design projects that involve floodplains, floodways, persistent flooding, erosion control and best management practices.  We typically conduct in depth field surveying with our professional land surveyors, analyze the situations utilizing the latest stormwater modeling software and develop designs that adhere to the municipalities or governing counties requirements.",
						picture: "/pictures/projectPictures/Web_6_G.jpg"
					},
					{
						title: "Transportation Design and Management",
						description: "Roadways typically comprise one of the largest assets that a municipality owns.  If roadways are not properly maintained and repaired, they pose safety risks to the public as well as large financial liabilities to the municipality.  MEI helps municipalities in developing and managing their transportation programs.  MEI will evaluate roadway conditions, design projects, establish project budgets, prioritize maintenance and repair programs, procure contractors and supervise the execution of the projects. MEI has extensive experience in the design and construction of new roadways or improving existing roadways.  MEI can also review engineering plans for roadway projects (designed by others) that are taking place within the municipality.",
						picture: "/pictures/projectPictures/Web_6_H.jpg"
					},
					{
						title: "Asset Management",
						description: "To make good decisions, you must have good data.  Better decisions are made when available information is up to date and accurate.  MEI provides our clients with the tools to facilitate and organized approach to decision making.  We collect and organize information and evaluate the condition of various assets including roadways, sewers, facilities and fleet.  This information is organized and presented in a user-friendly manner that can be utilized for justifying projects and allocating resources. ",
						picture: "/pictures/projectPictures/Web_6_I_1.jpg"
					},
					{
						title: "Fleet Management",
						description: "Any decision made concerning a fleet of vehicles will have a huge impact on cost.  Understanding all the aspects that impact your fleet will help you properly fund the repair, sustainability and replacement of these assets.  Whether your fleet is two trucks or 1,00 pieces of equipment, the impacts of fuel, maintenance, repairs, depreciation, upkeep, safety, insurance and security will impact your bottom line.  MEI’s staff has experience in managing large fleets of vehicles and equipment.  Our experience will help you maximize your fleet’s efficiency. ",
						picture: "/pictures/projectPictures/Web_6_K.jpg"
					},
					{
						title: "Facilities Management",
						description: "Budgeting for capital facilities can be expensive and difficult to accurately forecast.  Planning regular maintenance, anticipating failures and preparing for the unexpected are all components that will determine the life/cycle cost of a facility and its usefulness.  It starts with a good program, identifying the current condition of your facilities and forecasting the expected and unexpected degradation.  MEI can prepare a plan that will ensure long term success of your budgeting process and effective utilization of your facilities. ",
						picture: "/pictures/projectPictures/Web_6_L.jpg"
					}
				]
			}
		};
	}

	setViewing = (e) => {
		const state = this.state;
		state.currentlyViewing = e.currentTarget.id;
		this.setState(state);
	}

	setEngineeringViewing = (e) => {
		const state = this.state;
		state.engineeringView = e.currentTarget.id;
		this.setState(state);
	}

	setOpen = (e) => {
		const state = this.state;
		if (this.state.currentlyViewing === "Engineering"){
			if (this.state.engineeringView === "Public"){
				this.state.modalContent = this.state.engineeringPSServices.services[e.currentTarget.id];
			}else if (this.state.engineeringView === "Residential"){
				this.state.modalContent = this.state.engineeringResServices.services[e.currentTarget.id];
			}else if (this.state.engineeringView === "Commercial"){
				this.state.modalContent = this.state.engineeringCIServices.services[e.currentTarget.id];
			}
		}else if (this.state.currentlyViewing === "Surveying"){
			this.state.modalContent = this.state.surveyingServices.services[e.currentTarget.id];
		}else if (this.state.currentlyViewing === "Municipal"){
			this.state.modalContent = this.state.municipalServices.services[e.currentTarget.id];
		}
		console.log(state);
		state.open = true;
		this.setState(state);
	}

	setClose = (e) => {
		const state = this.state;
		state.open = false;
		this.setState(state);
	}

	render(){
		const surveyingContent = this.state.surveyingServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});
		const engineeringPSContent = this.state.engineeringPSServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});
		const engineeringResContent = this.state.engineeringResServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});
		const engineeringCIContent = this.state.engineeringCIServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});
		const constructionContent = this.state.constructionServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});
		const municipalContent = this.state.municipalServices.services.map((service, i)=>{
			return(<div key={i} id={i} className="servicesCard" onClick={this.setOpen} ><h2 className="cardTitle">{service.title}</h2><img className="cardPicture" src={service.picture} alt={"Card Picture " + i} /></div>)
		});


		return (
			<div className="page">
				<div className="title">
					<div id="servicesParallax">
						<div id="servicesRightTriangle">
						</div>
						<div id="servicesLeftTriangle">
							<div id="servicesLeftTriangleSmall">
								<div id="servicesLeftTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="servicesParallaxTitle">Services</h1>
					</div>
					<div className="servicesBreaker">
						<h2 className="servicesBreakerTitle">
							{this.state.currentlyViewing === "Engineering" ? this.state.engineeringView + " " : null}
							{this.state.currentlyViewing}
						</h2>
						<p className="servicesBreakerContent">
							{this.state.currentlyViewing === "Surveying" ? this.state.surveyingServices.intro : null}
							{this.state.currentlyViewing === "Construction" ? this.state.constructionServices.intro : null}
							{this.state.currentlyViewing === "Municipal" ? this.state.municipalServices.intro : null}
							{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Public" ? this.state.engineeringPSServices.intro : null}
							{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Residential" ? this.state.engineeringResServices.intro : null}
							{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Commercial" ? this.state.engineeringCIServices.intro : null}
						</p>
						</div>
					<div id="choiceBarOne" href=".cardContainer">
						<div onClick={this.setViewing} id="Surveying" className={this.state.currentlyViewing === "Surveying" ? "selected firstSelection" : "firstSelection"}>Surveying</div>
						<div onClick={this.setViewing} id="Engineering" className={this.state.currentlyViewing === "Engineering" ? "selected firstSelection" : "firstSelection"}>Engineering</div>
						<div onClick={this.setViewing} id="Construction" className={this.state.currentlyViewing === "Construction" ? "selected firstSelection" : "firstSelection"}>Construction</div>
						<div onClick={this.setViewing} id="Municipal" className={this.state.currentlyViewing === "Municipal" ? "selected firstSelection" : "firstSelection"}>Municipal Services</div>
					</div>
					<div id="choiceBarTwo" href=".cardContainer" className={this.state.currentlyViewing === "Engineering" ? "secondBarOn" : "secondBarOff"}>
						<div onClick={this.setEngineeringViewing} id="Public" className={this.state.engineeringView === "Public" ? "selected secondSelection" : "secondSelection"}>Public Sector</div>
						<div onClick={this.setEngineeringViewing} id="Residential" className={this.state.engineeringView === "Residential" ? "selected secondSelection" : "secondSelection"}>Residential</div>
						<div onClick={this.setEngineeringViewing} id="Commercial" className={this.state.engineeringView === "Commercial" ? "selected secondSelection" : "secondSelection"}>Commercial & Industrial</div>
					</div>
					<div className="cardContainer">
						{this.state.currentlyViewing === "Surveying" ? surveyingContent : null}
						{this.state.currentlyViewing === "Construction" ? constructionContent : null}
						{this.state.currentlyViewing === "Municipal" ? municipalContent : null}
						{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Public" ? engineeringPSContent : null}
						{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Residential" ? engineeringResContent : null}
						{this.state.currentlyViewing === "Engineering" && this.state.engineeringView === "Commercial" ? engineeringCIContent : null}
					</div>
					<Modal open={this.state.open} onClose={this.setClose}>
						<h2 id="modalTitle">{this.state.modalContent.title}</h2>
						<img src={this.state.modalContent.picture} style={{maxWidth: 75 + "%", margin: 0 + " auto"}}/>
						<p>{this.state.modalContent.description}</p>
					</Modal>
				</div>
				<footer>
					<div className="footer">
						<div>
							<Link to="/morris"><img src="/morrisLogo.png" id="logo"/></Link>
						</div>
						<div className="links">
							<Link to="/morris" className="anOrderLink hoverEffect">Order Online</Link>
						</div>
						<div className="footerLinks">
							<Link to="/morris" className="aFooterLink hoverEffect">Home</Link>
							<Link to="/morris/services" className="aFooterLink hoverEffect">Services</Link>
							<Link to="/morris/news" className="aFooterLink hoverEffect">News</Link>
							<Link to="/morris/about" className="aFooterLink hoverEffect">About</Link>
							<Link to="/morris/careers" className="aFooterLink hoverEffect">Careers</Link>
							<Link to="/morris/contact" className="aFooterLink hoverEffect">Contact</Link>
						</div>
					</div>
					<div>© 2018 Morris Engineering. All rights reserved.</div>
				</footer>
			</div>
		);
	}
}

const Services = AnimatedWrapper(ServicesComponent);
export default Services;