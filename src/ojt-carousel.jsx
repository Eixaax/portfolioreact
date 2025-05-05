"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import orientation from "./assets/orientation.jpg";
// import week1 from "./assets/week1.jpg";
import week2 from "./assets/week2.jpg";
import week3 from "./assets/week3.jpg";
import week4 from "./assets/week4.jpg";
import week5 from "./assets/week5.jpg";
import week6 from "./assets/week6.jpg";
import week7 from "./assets/week7.jpg";
import week8 from "./assets/week8.jpg";
import week9 from "./assets/week9.jpg";
import week10 from "./assets/week10.jpg";
import week11 from "./assets/week11.jpg";

const ojtWeeks = [
  {
    id: 1,
    week: "Week 1",
    title: "Orientation and Team Introduction",
    description: "First week at the Administration Office. Got introduced to the team had a short orientation session with our supervisor and the client discussing the project and help provide solutions to their problems.",
    date: "February 17 - February 21, 2025",
    image: orientation,
    detailedDescription: "I was introduced to the team and given an orientation on the project’s goals and company policies. Meetings with my supervisor and the client helped clarify expectations and deliverables. By the end of the week, I had a clear understanding of my role in the project. I also set up my workspace and familiarized myself with the team’s workflow.",
    additionalImages: [
      orientation,
      week7,
      week5,
    ],
  },
  {
    id: 2,
    week: "Week 2",
    title: "System Architecture Design",
    description: "Spent time understanding the problem and creating the system architecture. Had my first code merged into the production branch.",
    date: "February 24 - February 28, 2025",
    image: week2,
    detailedDescription: "I analyzed the project requirements and contributed to designing the system architecture. After discussions with the team, we finalized the technical approach. My first code contribution was reviewed and merged into the production branch, marking a key milestone. This experience helped me learn the team’s development and version control processes.",
    additionalImages: [
      week2,
      week8,
      week3,
    ],
  },
  {
    id: 3,
    week: "Week 3",
    title: "Project Research and Resource Gathering",
    description: "Had a team meeting to discuss the project requirements. Spent time researching and gathering resources for the project.",
    date: "March 03 - March 07, 2025",
    image: week3,
    detailedDescription: "The team held detailed discussions to refine the project’s objectives and scope. I researched potential solutions, technologies, and best practices to support development. I compiled a repository of useful resources for future reference. This groundwork helped shape our implementation strategy moving forward.",
    additionalImages: [
      week3,
      week10,
      week6,
    ],
  },
  {
    id: 4,
    week: "Week 4",
    title: "Workflow Presentation and Client Briefing",
    description: "Presented the workflow of the project to the team. Had a briefing with the client to discuss the project requirements.",
    date: "March 10 - March 14, 2025",
    image: week4,
    detailedDescription: "I presented the proposed project workflow to both the internal team and the client. The briefing session allowed us to address questions and align on expectations. Client feedback was incorporated into an updated project plan. This ensured everyone was on the same page before moving into active development.",
    additionalImages: [
      week4,
      week9,
      week11,
    ],
  },
  {
    id: 5,
    week: "Week 5",
    title: "Frontend Development and Integration",
    description: "Started integrating the frontend and following the design guidelines. Had a few bugs to fix and learned about the testing process.",
    date: "March 17 - March 21, 2025",
    image: week5,
    detailedDescription: "I began implementing frontend components based on the approved designs. Integration with backend services revealed a few bugs, which I debugged and fixed. The team walked me through their testing protocols, including unit and integration tests. By week’s end, we had made solid progress on the user interface.",
    additionalImages: [
      week5,
      week6,
      week3,
    ],
  },
  {
    id: 6,
    week: "Week 6",
    title: "UI/UX Collaboration and Redesign",
    description: "Started collaborating with the design team on a new design for a much efficient user experience.",
    date: "March 24 - March 29, 2025",
    image: week6,
    detailedDescription: "I collaborated closely with the UI/UX team to refine the application’s design. We analyzed user flows and identified areas for improvement, creating new wireframes and prototypes. My role involved providing technical feedback while learning design principles. This cross-team effort resulted in a more intuitive user experience.",
    additionalImages: [
      week6,
      week10,
      week2,
    ],
  },
  {
    id: 7,
    week: "Week 7",
    title: "Design Finalization and Planning",
    description: "Started gathering new resources and materials for the project. Had a few meetings with the design team to discuss the project requirements.",
    date: "March 31 - April 04, 2025",
    image: week7,
    detailedDescription: "I worked on finalizing design assets and preparing development resources. Multiple meetings with the design team ensured all requirements were clearly documented. We established a style guide and component library for consistency. These preparations set the stage for efficient implementation in the coming weeks.",
    additionalImages: [
      week7,
      week3,
      week11,
    ],
  },
  {
    id: 8,
    week: "Week 8",
    title: "Design Revision Implementation",
    description: "Started implementing the revisions and changes discussed in the design meetings. Had a few bugs to fix and learned about the testing process.",
    date: "April 07 - April 11, 2025",
    image: week8,
    detailedDescription: "I implemented the revised designs, updating UI components and fixing related issues. Regular code reviews and testing sessions helped maintain quality standards. The team provided feedback that improved both the product and my skills. By the end of the week, the application reflected the updated designs accurately.",
    additionalImages: [
      week8,
      week3,
      week5,
    ],
  },
  {
    id: 9,
    week: "Week 9",
    title: "Backend System Integration",
    description: "The beginning of the backend integration process. adjusted the database and started implementing the API endpoints.",
    date: "April 14 - April 18, 2025",
    image: week9,
    detailedDescription: "I began backend integration by adjusting the database schema and creating API endpoints. Focus areas included data validation, error handling, and performance optimization. Close coordination with frontend developers ensured smooth integration. This work laid the foundation for full system functionality.",
    additionalImages: [
      week9,
      week4,
      week6,
    ],
  },
  {
    id: 10,
    week: "Week 10",
    title: "System Testing and Debugging",
    description: "Started debugging the application and testing the API endpoints. adjusting the frontend to match the backend.",
    date: "March 21 - March 25, 2025",
    image: week10,
    detailedDescription: "I conducted thorough testing, debugging issues in both frontend and backend components. The frontend was adjusted to properly handle API responses and edge cases. Automated and manual tests were used to verify stability. These efforts significantly improved the application’s reliability.",
    additionalImages: [
      week10,
      week8,
      week7,
    ],
  },
  {
    id: 11,
    week: "Week 11",
    title: "Final Project Presentation and Review",
    description: "Presented the final project to the team and the client. Had a few meetings to discuss the project and proceeded to the implementation of the concerns.",
    date: "April 28 - May 02, 2025",
    image: week11,
    detailedDescription: "I presented the finalized project to the team and client, demonstrating all features. Feedback was addressed through quick iterations and fixes. Documentation and knowledge transfer sessions ensured a smooth handover. The project concluded successfully, meeting all initial requirements.",
    additionalImages: [
      week11,
      week9,
      week5,
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup just in case component unmounts while modal is open
    return () => {
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  const openModal = () => {
    setIsModalOpen(true)
    setModalImageIndex(0)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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

      <div className={`modal-overlay ${isModalOpen ? "visible" : ""}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{ojtWeeks[activeIndex].week}</h2>
            <button className="modal-close" onClick={closeModal}>
              <X />
            </button>
          </div>

          <div className="modal-body">
            <div className="carousel-cont">
              <button className="modal-carousel-button prev" onClick={handleModalPrev}>
                <ChevronLeft />
              </button>

              <div className="modal-carousel-container">
                <img
                  src={
                    ojtWeeks[activeIndex]?.additionalImages[modalImageIndex] ||
                    "/placeholder.svg"
                  }
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
              <h1>{ojtWeeks[activeIndex].title}</h1>
              <h2>{ojtWeeks[activeIndex].date}</h2>
              <p>{ojtWeeks[activeIndex].detailedDescription}</p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
