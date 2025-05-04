"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import orientation from "./assets/orientation.jpg";


const ojtWeeks = [
  {
    id: 1,
    week: "Week 1",
    title: "Orientation and Team Introduction",
    description: "First week at the Administration Office. Got introduced to the team had a short orientation session with our supervisor and the client discussing the project and help provide solutions to their problems.",
    date: "February 17 - February 21, 2025",
    image: orientation,
    detailedDescription: "During my first week, I was warmly welcomed at the Administration Office. I had orientation sessions with my supervisor where we discussed the project scope and objectives. The team introduced me to their current workflows and challenges. I met with the client to understand their requirements and expectations. This week focused on acclimating to the work environment, learning about company policies, and setting up my workspace. By week's end, I had a clear understanding of my role in addressing the client's needs through this project.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 2,
    week: "Week 2",
    title: "System Architecture Design",
    description: "Spent time understanding the problem and creating the system architecture. Had my first code merged into the production branch.",
    date: "February 24 - February 28, 2025",
    image: orientation,
    detailedDescription: "This week was dedicated to analyzing the project requirements and designing the system architecture. I studied the existing infrastructure and proposed solutions to address the client's needs. After several discussions with the team, we finalized the architectural approach. I contributed my first code to the project, which was reviewed and merged into the production branch. This milestone gave me valuable experience in the team's development workflow and version control practices.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 3,
    week: "Week 3",
    title: "Project Research and Resource Gathering",
    description: "Had a team meeting to discuss the project requirements. Spent time researching and gathering resources for the project.",
    date: "March 03 - March 07, 2025",
    image: orientation,
    detailedDescription: "We conducted thorough project requirement discussions this week, clarifying objectives and deliverables. I researched potential solutions, technologies, and best practices relevant to our project. This involved reviewing documentation, case studies, and technical resources. I compiled a resource repository that would support our development process. The team evaluated different approaches and began outlining our implementation strategy based on the gathered information.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 4,
    week: "Week 4",
    title: "Workflow Presentation and Client Briefing",
    description: "Presented the workflow of the project to the team. Had a briefing with the client to discuss the project requirements.",
    date: "March 10 - March 14, 2025",
    image: orientation,
    detailedDescription: "I prepared and presented the proposed project workflow to both our internal team and the client. The presentation covered our development approach, timeline, and expected outcomes. During the client briefing, we clarified requirements and addressed their concerns. This collaborative session helped align everyone's expectations and resulted in valuable feedback that we incorporated into our plans. The week concluded with an updated project roadmap reflecting these discussions.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 5,
    week: "Week 5",
    title: "Frontend Development and Integration",
    description: "Started integrating the frontend and following the design guidelines. Had a few bugs to fix and learned about the testing process.",
    date: "March 17 - March 21, 2025",
    image: orientation,
    detailedDescription: "This week focused on frontend development, where I implemented UI components according to the design specifications. I worked on integrating these components with the backend services, ensuring proper data flow and functionality. During testing, I identified and fixed several bugs, which provided hands-on experience with debugging techniques. The team introduced me to their testing protocols, including unit tests and integration testing procedures. By week's end, we had made significant progress in the user interface implementation.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 6,
    week: "Week 6",
    title: "UI/UX Collaboration and Redesign",
    description: "Started collaborating with the design team on a new design for a much efficient user experience.",
    date: "March 24 - March 29, 2025",
    image: orientation,
    detailedDescription: "I began close collaboration with the UI/UX design team to improve the application's user experience. We analyzed user flows and identified areas for enhancement. Through brainstorming sessions, we developed wireframes and prototypes for the redesigned interface. I provided technical feedback on implementation feasibility while learning valuable design principles. This cross-functional work helped bridge the gap between design and development perspectives, resulting in more user-centric solutions.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 7,
    week: "Week 7",
    title: "Design Finalization and Planning",
    description: "Started gathering new resources and materials for the project. Had a few meetings with the design team to discuss the project requirements.",
    date: "March 31 - April 04, 2025",
    image: orientation,
    detailedDescription: "This week involved finalizing design assets and planning their implementation. I gathered necessary resources, including UI libraries and design specifications. Multiple coordination meetings with the design team ensured all requirements were clearly understood and documented. We established a style guide and component library to maintain consistency across the application. This preparatory work created a solid foundation for the upcoming development phase.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 8,
    week: "Week 8",
    title: "Design Revision Implementation",
    description: "Started implementing the revisions and changes discussed in the design meetings. Had a few bugs to fix and learned about the testing process.",
    date: "April 07 - April 11, 2025",
    image: orientation,
    detailedDescription: "I implemented the design revisions agreed upon in previous meetings, updating UI components and user flows. This process involved addressing feedback from stakeholders while maintaining code quality. Several bugs emerged during implementation, which I resolved through systematic debugging. The team conducted regular code reviews and testing sessions, providing opportunities to improve both the product and my development skills. By week's end, the application reflected the updated designs accurately.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 9,
    week: "Week 9",
    title: "Backend System Integration",
    description: "The beginning of the backend integration process. adjusted the database and started implementing the API endpoints.",
    date: "April 14 - April 18, 2025",
    image: orientation,
    detailedDescription: "This week marked the start of backend integration work. I modified database structures to support new features and began implementing API endpoints. The focus was on creating robust, well-documented interfaces between frontend and backend systems. I learned about data validation, error handling, and performance optimization in API development. Regular synchronization with frontend developers ensured seamless integration between components.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 10,
    week: "Week 10",
    title: "System Testing and Debugging",
    description: "Started debugging the application and testing the API endpoints. adjusting the frontend to match the backend.",
    date: "March 21 - March 25, 2025",
    image: orientation,
    detailedDescription: "The application underwent comprehensive testing this week. I debugged issues across both frontend and backend components, with particular attention to API endpoint reliability. Frontend adjustments were made to properly consume backend services and handle various response scenarios. We implemented automated tests and conducted manual testing to verify system behavior. This rigorous quality assurance process significantly improved the application's stability.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
  {
    id: 11,
    week: "Week 11",
    title: "Final Project Presentation and Review",
    description: "Presented the final project to the team and the client. Had a few meetings to discuss the project and proceeded to the implementation of the concerns.",
    date: "April 28 - May 02, 2025",
    image: orientation,
    detailedDescription: "In our final week, I presented the completed project to both our internal team and the client. The demonstration showcased all implemented features and addressed initial requirements. Feedback sessions identified minor improvements, which we promptly implemented. We documented the system thoroughly and conducted knowledge transfer sessions. This concluding phase validated our work and provided valuable insights into the project lifecycle from conception to delivery.",
    additionalImages: [
      orientation,
      orientation,
      orientation,
    ],
  },
]

export default function OJTCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState("next")

  useEffect(() => {
    // Add visible class after component mounts
    setIsVisible(true)

    // Set up intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            entry.target.classList.remove("visible")
          }
        })
      },
      { threshold: 0.5 },
    )

    const blogSection = document.getElementById("blog")
    if (blogSection) {
      observer.observe(blogSection)
    }

    return () => {
      if (blogSection) {
        observer.unobserve(blogSection)
      }
    }
  }, [])

  const handlePrev = () => {
    setAnimationDirection("prev")
    setActiveIndex((prevIndex) => (prevIndex === 0 ? ojtWeeks.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setAnimationDirection("next")
    setActiveIndex((prevIndex) => (prevIndex === ojtWeeks.length - 1 ? 0 : prevIndex + 1))
  }

  // Calculate indices for visible carousel items
  const getVisibleIndices = () => {
    const totalItems = ojtWeeks.length

    // Get indices for 5 visible items (2 on each side of active)
    const indices = []

    // Add previous 2 items
    for (let i = 2; i > 0; i--) {
      const index = (activeIndex - i + totalItems) % totalItems
      indices.push(index)
    }

    // Add active item
    indices.push(activeIndex)

    // Add next 2 items
    for (let i = 1; i <= 2; i++) {
      const index = (activeIndex + i) % totalItems
      indices.push(index)
    }

    return indices
  }

  const openModal = () => {
    setIsModalOpen(true)
    setModalImageIndex(0)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  const handleModalPrev = () => {
    const currentWeek = ojtWeeks[activeIndex]
    setModalImageIndex((prevIndex) => (prevIndex === 0 ? currentWeek.additionalImages.length - 1 : prevIndex - 1))
  }

  const handleModalNext = () => {
    const currentWeek = ojtWeeks[activeIndex]
    setModalImageIndex((prevIndex) => (prevIndex === currentWeek.additionalImages.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle click on carousel item
  const handleItemClick = (index) => {
    if (index === activeIndex) {
      openModal()
    } else {
      // Determine direction for animation
      const diff = (index - activeIndex + ojtWeeks.length) % ojtWeeks.length
      const direction = diff > ojtWeeks.length / 2 || (diff < ojtWeeks.length / 2 && diff > 0) ? "next" : "prev"
      setAnimationDirection(direction)
      setActiveIndex(index)
    }
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div className={`blogs-page ${isVisible ? "visible" : ""}`} id="blog">
      <h1>MY OJT JOURNEY</h1>

      <div className="blog-cont">
        <div className="left">
          <div className="carousel-container">
            <button className="carousel-button prev-button" onClick={handlePrev} aria-label="Previous week">
              <ChevronLeft className="carousel-icon" />
            </button>

            <div className="horizontal-carousel">
              {visibleIndices.map((index, i) => {
                // Determine position class (far-left, left, center, right, far-right)
                let positionClass = ""
                if (i === 0) positionClass = "far-left"
                else if (i === 1) positionClass = "left"
                else if (i === 2) positionClass = "center"
                else if (i === 3) positionClass = "right"
                else if (i === 4) positionClass = "far-right"

                return (
                  <div
                    key={index}
                    className={`carousel-card ${positionClass} ${index === activeIndex ? "active" : ""}`}
                    onClick={() => handleItemClick(index)}
                  >
                    <img
                      src={ojtWeeks[index].image || "/placeholder.svg"}
                      alt={`Week ${ojtWeeks[index].id}`}
                      className="carousel-card-image"
                    />
                    <div className="carousel-card-overlay">
                      <span>{ojtWeeks[index].week}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="carousel-button next-button" onClick={handleNext} aria-label="Next week">
              <ChevronRight className="carousel-icon" />
            </button>
          </div>

          <div className="carousel-pagination">
            {ojtWeeks.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
                aria-label={`Week ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="right">
          <div className="week-info-container">
            {ojtWeeks.map((week, index) => (
              <div
                key={index}
                className={`week-info ${
                  index === activeIndex
                    ? animationDirection === "next"
                      ? "fade-in-right"
                      : "fade-in-left"
                    : index === (activeIndex - 1 + ojtWeeks.length) % ojtWeeks.length && animationDirection === "next"
                      ? "fade-out-left"
                      : index === (activeIndex + 1) % ojtWeeks.length && animationDirection === "prev"
                        ? "fade-out-right"
                        : "hidden"
                }`}
              >
                <div className="week-header">
                  <h2>{week.week}</h2>
                  <h3>{week.title}</h3>
                </div>
                <div className="week-date">{week.date}</div>
                <div className="week-description">
                  <p>{week.description}</p>
                </div>
                <button className="view-more-button" onClick={openModal}>
                  View More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X />
            </button>

            <div className="modal-header">
              <h2>
                {ojtWeeks[activeIndex].week} - {ojtWeeks[activeIndex].title}
              </h2>
              <p className="modal-date">{ojtWeeks[activeIndex].date}</p>
            </div>

            <div className="modal-carousel">
              <button className="modal-carousel-button prev" onClick={handleModalPrev}>
                <ChevronLeft />
              </button>

              <div className="modal-carousel-container">
                <img
                  src={ojtWeeks[activeIndex].additionalImages[modalImageIndex] || "/placeholder.svg"}
                  alt={`Week ${ojtWeeks[activeIndex].id} image ${modalImageIndex + 1}`}
                  className="modal-carousel-image"
                />
                <div className="modal-image-counter">
                  {modalImageIndex + 1} / {ojtWeeks[activeIndex].additionalImages.length}
                </div>
              </div>

              <button className="modal-carousel-button next" onClick={handleModalNext}>
                <ChevronRight />
              </button>
            </div>

            <div className="modal-description">
              <h3>My Experience</h3>
              <p>{ojtWeeks[activeIndex].detailedDescription}</p>
            </div>

            <div className="modal-pagination">
              {ojtWeeks[activeIndex].additionalImages.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${modalImageIndex === index ? "active" : ""}`}
                  onClick={() => setModalImageIndex(index)}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
