import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Open Healthcare Network */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(10 19 29)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2025 – Current"
            iconStyle={{ background: "#5000ca", color: "rgb(10 19 29)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} />}
          >
            <h3 className="vertical-timeline-element-title">
              Junior Full Stack Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Open Healthcare Network (Remote)
            </h4>
            <ul className="list-disc ml-5">
              <li>
                Fixed critical UI bugs in frontend app, improving patient data
                accuracy with better validation and default values.
              </li>
              <li>
                Refactored patient data models by migrating deprecated types,
                reducing potential errors and improving maintainability.
              </li>
              <li>
                Resolved and debugged i18n cleanup script to remove unused
                translation keys, improving localization maintainability.
              </li>
              <li>
                Collaborated with team using Git for version control, task
                organization, and reviews.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* TaskMate AI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – Mar 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(10 19 29)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TaskMate AI – Jaipur, India
            </h4>
            <ul className="list-disc ml-5">
              <li>
                Engineered AI-based task management system, boosting task
                automation efficiency by 35%.
              </li>
              <li>
                Designed scalable backend APIs with Node.js/Express.js, cutting
                latency by 50%.
              </li>
              <li>
                Enhanced performance, increasing user engagement by 20% and
                reducing page load time by 25%.
              </li>
              <li>
                Managed tasks with Jira, contributing to stand-ups, sprint
                planning, and bug triage.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Twenty OSS Contributions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 – Jan 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(10 19 29)" }}
            icon={<FontAwesomeIcon icon={faCodeBranch as any} />}
          >
            <h3 className="vertical-timeline-element-title">
              Open Source Contributor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a
                href="https://twenty.com/contributors/yadavshubham01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Twenty CRM
              </a>
            </h4>
            <p>
              Contributed to{" "}
              <a
                href="https://twenty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Twenty
              </a>
              ,an open source project. Added features, fixed bugs, and
              participated in community collaboration.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
