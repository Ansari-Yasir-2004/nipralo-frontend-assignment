// import "../assets/styles/works.css";
// import { projects } from "../Projects";

// const Works = () => {
//   const openProject = (link) => {
//     window.open(link, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="stack-container">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className="stack-card"
//           onClick={() => openProject(project.link)}
//           style={{ cursor: "pointer" }}
//         >
//           <div className="card-content">
//             {/* Top Row */}
//             <div className="card-top">
//               <span className="card-number">0{index + 1}</span>
//               <span className="card-category">{project.category}</span>
//               <span className="card-year">{project.year}</span>
//             </div>

//             {/* Title */}
//             <h3 className="card-title">{project.title}</h3>

//             {/* Description */}
//             <p className="card-desc">{project.description}</p>

//             {/* Bottom Row */}
//             <div className="card-bottom">
//               <div className="card-tech">
//                 {project.tech.map((t, i) => (
//                   <span key={i} className="tech-tag">{t}</span>
//                 ))}
//               </div>
//               <div className="card-arrow">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M7 17L17 7M17 7H7M17 7V17" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Works;
